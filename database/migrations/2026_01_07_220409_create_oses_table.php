<?php

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
        Schema::create('oses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('active_user_id')->nullable();
            $table->string("shortname")->unique();
            $table->string("name");
            $table->string("system");
            $table->string("type");
            $table->timestamps();

            $table->foreign('active_user_id')->references('id')->on('active_users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oses');
    }
};
