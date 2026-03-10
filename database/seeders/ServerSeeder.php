<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServerSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'short' => 'ubuntu', 
                'full' => 'Ubuntu Linux', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '24.04', 'code' => 'noble_numbat', 'lts' => 1],
                    ['v' => '22.04', 'code' => 'jammy_jellyfish', 'lts' => 1]
                ]
            ],
            [
                'short' => 'debian', 
                'full' => 'Debian GNU/Linux', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '12.0', 'code' => 'bookworm', 'lts' => 1],
                    ['v' => '11.0', 'code' => 'bullseye', 'lts' => 1]
                ]
            ],
            [
                'short' => 'centos', 
                'full' => 'CentOS Stream', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '9.0', 'code' => 'stream_9', 'lts' => 0]
                ]
            ],
            [
                'short' => 'rhel', 
                'full' => 'Red Hat Enterprise Linux', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '9.4', 'code' => 'plow', 'lts' => 1],
                    ['v' => '8.10', 'code' => 'ootpa', 'lts' => 1]
                ]
            ],
            [
                'short' => 'rocky', 
                'full' => 'Rocky Linux', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '9.3', 'code' => 'blue_onyx', 'lts' => 1]
                ]
            ],
            [
                'short' => 'alma', 
                'full' => 'AlmaLinux', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '9.3', 'code' => 'emerald_elixir', 'lts' => 1]
                ]
            ],
            [
                'short' => 'suse', 
                'full' => 'SUSE Linux Enterprise', 
                'type' => 'linux', 
                'versions' => [
                    ['v' => '15.5', 'code' => 'sles_15_sp5', 'lts' => 1]
                ]
            ],
        ];

        foreach ($data as $osItem) {
            $osId = DB::table('oses')->insertGetId([
                'active_user_id' => null,
                'short_name'     => $osItem['short'],
                'name'           => $osItem['full'],
                'type'           => $osItem['type'],
                'os_type'        => 'server',
                'created_at'     => now(),
                'updated_at'     => now(),
            ]);

            foreach ($osItem['versions'] as $vItem) {
                $versionId = DB::table('oses_versions')->insertGetId([
                    'os_id'      => $osId,
                    'version'    => $vItem['v'],
                    'stable'     => 1,
                    'lts'        => $vItem['lts'],
                    'codename'   => $vItem['code'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                $serverId = DB::table('servers')->insertGetId([
                    'active_user_id' => 1,
                    'os_version_id'  => $versionId,
                    'name'           => strtoupper($osItem['short']) . '-' . str_replace('.', '', $vItem['v']) . '-SRV',
                    'description'    => 'automated provisioning for ' . $osItem['full'],
                    'cores'          => 4,
                    'memory'         => 8.0,
                    'mac'            => sprintf('00:16:3e:%02x:%02x:%02x', mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255)),
                    'ip'             => '10.0.' . mt_rand(1, 250) . '.' . mt_rand(1, 250),
                    'installed'      => false,
                    'status'         => 0,
                    'created_at'     => now(),
                    'updated_at'     => now(),
                ]);

                $diskId = DB::table('disks')->insertGetId([
                    'name'       => 'System_Root_Drive',
                    'size'    => 42949672960, // 40 GB in bytes
                    'installed'  => false,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                DB::table('server_disk')->insert([
                    'server_id'  => $serverId,
                    'disk_id'    => $diskId,
                    'main'       => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}