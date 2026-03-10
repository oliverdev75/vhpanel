<?php

namespace App\Console\Commands;

use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;
use App\Models\User;

class CreateUserCommand extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-user {username} {fullname} {email} {role}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates an active user of the application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $fullname = $this->argument('fullname');
        $username = $this->argument('username');
        $email = $this->argument('email');
        $role = $this->argument('role');

        if (User::where('username', $username)->first()){
            $this->error("Username already exists");
            $username = $this->ask("Introduce new please");
        }

        if (User::where('email', $email)->first()){
            $this->error("Email already exists");
            $email = $this->ask("Introduce new please");
        }

        $this->info("User creation process");
        $password = $this->secret("Create password for $username");

        $user = User::create([
            "username" => $username,
            "fullname" => $fullname,            
            "email" => $email,
            "password" => bcrypt($password),
            "role_id" => Role::where('name', $role)->first()->id
        ]);
    }
}
