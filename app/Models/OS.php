<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OS extends Model
{
    protected $table = "oses";

    protected $guarded = [];

    public function versions(): HasMany
    {
        return $this->hasMany(OSVersion::class);
    }
}
