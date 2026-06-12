<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class HexCast implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        $mac = "";
        str(bin2hex($value))->split(1)->each(function ($value, $key) use ($mac) {
            $mac .= $value;
            if (!$key % 2 && $key != Str::length($mac)) {
                $mac .= ':';
            }
        });
        
        return $mac;
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return hex2bin(str($value)->split(1)->filter(fn ($char) => $char != ':')->join(''));
    }
}
