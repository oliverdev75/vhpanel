<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "fullname" => "Óliver Ros",
            "email" => "oliverrosfp23@ibf.cat",
            "password" => bcrypt("1234"),
            "role_id" => 1
        ]);

/*         DB::table("vh_users")->insert([
            "user_login" => "virtualhost",
            "user_email" => "oliverrosfp23@ibf.cat",
            "display_name" => "SuperHost"
        ]); */

/*         User::create([
            "vh_user_id" => 1,
            "role_id" => 1
        ]); */

        User::create([
            "fullname" => "Test app",
            "email" => "test@gmail.com",
            "password" => bcrypt("1234"),
            "role_id" => 2
        ]);

/*         DB::table("vh_users")->insert([
            "user_login" => "test",
            "user_email" => "test@gmail.com",
            "display_name" => "Test Client"
        ]);

        User::create([
            "vh_user_id" => 2,
            "role_id" => 2,
        ]); */
    }
}
