<?php

namespace App\Console\Commands;

use App\Services\KVMService;
use Illuminate\Console\Command;

class TestLibvirtConnectionCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-virt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test Libvirt server connection';

    /**
     * Execute the console command.
     */
    public function handle(KVMService $kvm)
    {
        
        $this->info(libvirt_connect_get_hypervisor($kvm->connection));
    }
}
