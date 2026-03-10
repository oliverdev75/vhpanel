<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Disk extends Model
{
    
    protected $guarded = [];

    public function server(): BelongsToMany
    {
        return $this->belongsToMany(Server::class, 'server_disk')->withPivot('main');
    }
}
