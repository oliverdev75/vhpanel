<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $list = [
            "create_server",
            "update_server",
            "delete_server",
            "create_os",
            "update_os",
            "delete_os",
            "view_under_server",
            "create_under_server",
            "delete_under_server",
        ];

        foreach ($list as $name) {
            Permission::create(["name" => $name]);
        }
    }
}