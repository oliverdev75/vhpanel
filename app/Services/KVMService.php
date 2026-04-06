<?php

namespace App\Services;

use App\Jobs\BootServer;

class KVMService
{

    public $connection;

    /**
     * Create a new class instance.
     */
    public function __construct(string $server, string $conn_type, bool $readonly)
    {
        $this->connection = libvirt_connect("qemu+$conn_type://$server/system", false);
    }

    public function getServerByName(string $name)
    {
        return libvirt_domain_lookup_by_uuid_string($this->connection, $name);
    }

    public function bootServer(string $id)
    {
        return libvirt_domain_create($this->getServerByName($id));
    }

    public function shutdownServer(string $name)
    {
        return libvirt_domain_shutdown($this->getServerByName($id));
    }

    public function createServer(string $name, int $memory, int $vcpus, string $iso, array $disks, array $networks)
    {
        return libvirt_domain_new($this->connection, $name, null, $memory, $memory, $vcpus, $iso, $disks, $networks);
    }
}