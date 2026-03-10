<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('active_user_id');
            $table->unsignedBigInteger('os_version_id');
            $table->string('name');
            $table->longText('description')->nullable();
            $table->integer('cores');
            $table->double('memory');
            $table->string('mac', 17)->unique()->nullable();
            $table->string('ip', 18);
            $table->boolean('installed')->default(true);
            $table->integer('status')->default(0);
            $table->timestamps();
            $table->foreign('active_user_id')->references('id')->on('active_users');
            $table->foreign('os_version_id')->references('id')->on('oses_versions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
};
