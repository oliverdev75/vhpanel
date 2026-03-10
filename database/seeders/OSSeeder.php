<?php

namespace Database\Seeders;

use App\Models\OS;
use App\Models\OSVersion;
use Illuminate\Database\Seeder;

class OSSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $list = [
            [
                "id" => 1,
                "name" => "Debian",
                "short_name" => "debian",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "id" => 2,
                "name" => "Ubuntu",
                "short_name" => "ubuntu",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "id" => 3,
                "name" => "Rocky",
                "short_name" => "rocky",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "id" => 4,
                "name" => "CentOS",
                "short_name" => "centos",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "id" => 5,
                "name" => "Alma Linux",
                "short_name" => "alma",
                "type" => "os",
                "os_type" => "linux"
            ]
        ];

        $versions = [
            [
                "id" => 1,
                "os_id" => 1,
                "version" => "12",
                "codename" => "bookwarm"
            ],
            [
                "id" => 2,
                "os_id" => 1,
                "version" => "13",
                "codename" => "trixie"
            ],
            [
                "id" => 3,
                "os_id" => 2,
                "version" => "23.04",
                "codename" => "lunar_lobster"
            ],
            [
                "id" => 4,
                "os_id" => 2,
                "version" => "24.04",
                "codename" => "noble_numbat"
            ],
            [
                "id" => 5,
                "os_id" => 2,
                "version" => "25.10",
                "codename" => "questing_quokka"
            ],
        ];

        foreach ($list as $os) {
            OS::create($os);
        }

        foreach ($versions as $version) {
            OSVersion::create($version);
        }
    }
}
