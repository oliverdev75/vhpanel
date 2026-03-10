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
        Schema::create('oses_versions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('os_id');
            $table->string('version');
            $table->boolean('stable')->default(1);
            $table->boolean('lts')->default(0);
            $table->string('codename');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oses_versions');
    }
};
