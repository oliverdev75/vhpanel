<?php

namespace App\Models;

use App\Casts\HexCast;
use App\Casts\IpCast;
use Illuminate\Database\Eloquent\Model;

class NetConfig extends Model
{
    protected $connection = "netconfig";
    protected $table = "hosts";
    protected $guarded = [];
    public $timestamps = false;

    public const MAC_TYPE_IDENTIFIER = 0;
    public const SERVERS_SUBNET_ID = 1;

    /*

    host_id -> primary key
    dhcp_identifier -> binary MAC
    dhcp_identifier_type -> client ID type (0 for MAC)
    dhcp4_subnet_id -> Subnet that belongs to
    ipv4_address -> integer IPv4 address

    */

    protected function casts(): array
    {
        return [
            'dhcp_identifier' => HexCast::class,
            'ipv4_address' => IpCast::class
        ];
    }
}
