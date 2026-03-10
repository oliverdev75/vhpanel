<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $list = [
            "admin",
            "client",
        ];

        foreach ($list as $name) {
            $role = Role::create(["name" => $name]);

            if ($name == "client") {
                for ($i = 1; $i <= 6; $i++) {
                    $role->permissions()->attach($i);
                }
            } else {
                $role->permissions()->attach(7);
                $role->permissions()->attach(8);
                $role->permissions()->attach(9);
            }
        }
    }
}
