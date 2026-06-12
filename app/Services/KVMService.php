<?php

namespace App\Services;

use App\Jobs\BootServer;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Storage;

class KVMService
{

    public $connection;
    protected string $disksPoolId = "7a20a285-23b8-47f7-9899-26c815e701bb";

    /**
     * Create a new class instance.
     */
    public function __construct(string $server, string $conn_type, bool $readonly = false)
    {
        $this->connection = libvirt_connect("qemu+$conn_type://$server/system", $readonly);
    }

    public function getServerById(string $name)
    {
        return libvirt_domain_lookup_by_uuid_string($this->connection, $name);
    }

    public function bootServer(string $id)
    {
        return libvirt_domain_create($this->getServerById($id));
    }

    public function shutdownServer(string $id)
    {
        return libvirt_domain_shutdown($this->getServerById($id));
    }

    public function createServer(string $uuid, array $data)
    {
        $template = Storage::disk('templates')->get('server.blade.php');
        return libvirt_domain_define_xml(
            $this->connection,
            Blade::render($template, [...compact('uuid'), ...$data])
        );
    }

    public function getServerInfoById(string $id)
    {
        return libvirt_domain_get_info($this->getServerById($id));
    }

    public function getStoragePool(string $id)
    {
        return libvirt_storagepool_lookup_by_uuid_string($this->connection, $id);
    }

    public function createStorage(string $name, int $capacity, )
    {
        return libvirt_storagevolume_create_xml($this->getStoragePool($this->disksPoolId), "
            <volume>
                <name>$name.qcow2</name>
                <capacity unit='G'>$capacity</capacity>
                <target>
                    <format type='qcow2'/>
                    <permissions>
                        <mode>0644</mode>
                    </permissions>
                </target>
            </volume>
        ");
    }
}