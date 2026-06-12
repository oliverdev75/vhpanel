<?php

namespace App\Http\Controllers;

use App\Helpers\ServerHelper;
use App\Models\Disk;
use App\Models\NetConfig;
use App\Models\OSVersion;
use App\Models\Server;
use App\Services\KVMService;
use Faker\Generator;
use Faker\Provider\Internet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\Ssh\Ssh;

class UserController extends Controller
{

    protected const DEFAULT_MAIN_DISK_SIZE = '10G'; // 10GB
    protected const QEMU_MAC_ADDRESS_PREFIX = '52:54:00';

    public function __construct(
        protected KVMService $kvm,
        protected Generator $faker
    ) {
        $this->faker->addProvider(new Internet($this->faker));
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function servers(Request $request)
    {
        $servers = Server::
            with('os_version.os', 'disks')
            ->where('active_user_id', $request->user()->id)
            ->get();

        return response()->json([
            'data' => $servers
        ]);
    }

    public function storeServer(Request $request)
    {
        $userId = $request->user()->id;
        $request->validate([
            'name' => 'bail|required|string',
            'description' => 'string',
            'os_version_id' => 'required',
            'cores' => 'required',
            'memory' => 'required',
            'root_password' => 'required',
            'user_fullname' => 'required',
            'username' => 'required',
            'user_password' => 'required',
        ]);

        $server = Server::create([
            ...($request->except(['root_password', 'user_fullname', 'user_password'])),
            'ip' => ServerHelper::createIp(),
            'active_user_id' => $userId,
            'os_version_id' => $request['os_version_id']
        ]);

        $disk = Disk::create([
            'name' => "{$request['name']}_main_disk",
            'size' => self::DEFAULT_MAIN_DISK_SIZE,
        ]);
        $server->disks()->attach($disk->id, ['main' => true]);
        $preseedFile = $this->makePreseed([
            'hostname' => "srv".$server->id,
            'rootPassword' => $request->root_password,
            'userFullname' => $request->user_fullname,
            'username' => $request->username,
            'userPassword' => $request->user_password
        ]);

        Storage::disk('land')->put("/debian/preseed.cfg", $preseedFile);
        $osVersionIso = OSVersion::find($request['os_version_id'])->iso;
        Ssh::create('virt', env('DMZ_HOST'), env('SFTP_PORT'))
        ->usePrivateKey(env('VIRT_SSH_PRIVATE_KEY'))
        ->execute("create_preseed $osVersionIso srv{$server->id}.iso");

        do {
            $mac = self::QEMU_MAC_ADDRESS_PREFIX . ':' . str($this->faker->macAddress())
                ->explode(':')
                ->skip(3)
                ->implode(':');
        } while (Server::where('mac', $mac)->exists());

        do {
            $uuid = Str::uuid();
        } while (Server::where('kvm_id', $uuid)->exists());

        if ($this->kvm->createStorage($server->id, 20)) {
            $serverRes = $this->kvm->createServer(
                $uuid,
                [
                    'name' => $server->id,
                    'memory' => $request['memory'], 
                    'cores' => $request['cores'], 
                    'mac' => $mac,
                    'iso' => "srv".$server->id.".iso"
                ]
            );

            if ($serverRes) {
                $server->update(['kvm_id' => $uuid, 'mac' => $mac]);
                NetConfig::create([
                    "dhcp_identifier" => $mac,  
                    "dhcp_identifier_type" => NetConfig::MAC_TYPE_IDENTIFIER,
                    "dhcp4_subnet_id" => NetConfig::SERVERS_SUBNET_ID,
                    "ipv4_address" => $server->ip,
                ]);
            }
        }
        
        $this->kvm->bootServer($server->kvm_id);

        return $this->kvm->getServerInfoById($server->kvm_id);
    }

    protected function makePreseed(array $data)
    {
        $template = Storage::disk('templates')->get('preseed.blade.php');
        return Blade::render($template, $data);
    }
}
