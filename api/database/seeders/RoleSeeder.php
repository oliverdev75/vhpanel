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
                    $role->permissions()->associate($i);
                }
            } else {
                $role->permissions()->associate(7);
                $role->permissions()->associate(8);
                $role->permissions()->associate(9);
            }
        }
    }
}
