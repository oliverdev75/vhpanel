<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class ChangeUserPasswordCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:change-user-password {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Changes a user password';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');
        $password = $this->secret('New password');

        User::where('email', $email)->first()->update(['password' => bcrypt($password)]);
    }
}
