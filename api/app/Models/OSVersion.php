<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OSVersion extends Model
{
    protected $table = 'oses_versions';
    protected $guarded = [];

    public function os(): BelongsTo
    {
        return $this->belongsTo(OS::class);
    }
}
