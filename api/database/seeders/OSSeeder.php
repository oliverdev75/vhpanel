<?php

namespace Database\Seeders;

use App\Models\OS;
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
                "name" => "Debian",
                "short_name" => "debian",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "name" => "Debian",
                "short_name" => "debian",
                "type" => "os",
                "os_type" => "linux"
            ],
            [
                "name" => "Debian",
                "short_name" => "debian",
                "type" => "os",
                "os_type" => "linux"
            ],
        ];

        foreach ($list as $os) {
            OS::create($os);
        }
    }
}
