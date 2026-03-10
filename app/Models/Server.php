<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Server extends Model
{
    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function os_version(): BelongsTo
    {
        return $this->belongsTo(OSVersion::class);
    }

    public function disks(): BelongsToMany
    {
        return $this->belongsToMany(Disk::class, 'server_disk')->withPivot('main');
    }
}
