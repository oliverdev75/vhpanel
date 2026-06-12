<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Services\KVMService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServerController extends Controller
{

    public function __construct(
        protected KVMService $kvm
    ) {}

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
    public function show(Server $server)
    {
        return response()->json(DB::table('servers')->orderByDesc('id')->get());
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

    public function makePreseed(array $data)
    {
        return "
            d-i debconf/priority string critical
            d-i auto-install/enable boolean true
            d-i debian-installer/locale string es_ES.UTF-8
            d-i debian-installer/add-kernel-opts string console=tty0 console=ttyS0,115200n8
            d-i keyboard-configuration/xkb-keymap select es
            d-i netcfg/choose_interface select enp1s0
            d-i netcfg/dhcp_timeout string 60
            d-i netcfg/get_hostname string srv{$data['id']}
            d-i netcfg/get_domain string localdomain
            d-i mirror/country string manual
            d-i mirror/http/hostname string http.us.debian.org
            d-i mirror/http/directory string /debian
            d-i mirror/http/proxy string
            d-i passwd/root-password password {$data['root_password']}
            d-i passwd/root-password-again password {$data['root_password']}
            d-i passwd/user-fullname string {$data['user']}
            d-i passwd/username string {$data['username']}
            d-i passwd/user-password password {$data['password']}
            d-i passwd/user-password-again password {$data['password']}
            d-i clock-setup/utc boolean true
            d-i time/zone string Europe/Madrid
            d-i clock-setup/ntp boolean true
            d-i partman-auto/disk string /dev/sda
            d-i partman-auto/method string regular
            d-i partman-auto-lvm/guided_size string max
            d-i partman-lvm/device_remove_lvm boolean true
            d-i partman-md/device_remove_md boolean true
            d-i partman-lvm/confirm boolean true
            d-i partman-lvm/confirm_nooverwrite boolean true
            d-i partman-auto/choose_recipe select atomic
            d-i partman-partitioning/confirm_write_new_label boolean true
            d-i partman/choose_partition select finish
            d-i partman/confirm boolean true
            d-i partman/confirm_nooverwrite boolean true
            d-i partman-md/confirm boolean true
            d-i apt-setup/cdrom/set-first boolean false
            d-i apt-setup/use_mirror boolean true
            d-i apt-setup/services-select multiselect security, updates
            d-i apt-setup/security_host string security.debian.org
            tasksel tasksel/first multiselect standard ssh-server
            d-i grub-installer/only_debian boolean true
            d-i grub-installer/with_other_os boolean false
            d-i grub-installer/bootdev string /dev/sda
            d-i preseed/late_command string in-target sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config; in-target systemctl enable ssh
            d-i finish-install/reboot_in_progress note
        ";
    }

    public function boot(Server $server)
    {
        $this->kvm->bootServer($server->kvm_id);
        $server->status = 1;
        $server->save();

        return response()->json(['message' => "Server {$server->id} booted successfuly"]);
    }

    public function shutdown(Server $server)
    {
        if ($this->kvm->shutdownServer($server->kvm_id)) {
            $server->status = 0;
            $server->save();
            return response()->json(['message' => "Server {$server->id} shutoff successfuly"]);
        }
            
        return response()->json(['message' => "Error: Server {$server->id} given error"], 500);
    }
}
