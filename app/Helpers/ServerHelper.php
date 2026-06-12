<?php

namespace App\Helpers;

use App\Models\Server;

class ServerHelper
{
    
    protected static string $ipPrefix = "10.0.0.";
    protected static int $firstIP = 50;

    public static function createIp(): string
    {
        $latestServer = Server::orderByDesc('id')->first();

        if ($latestServer) {
            $iplatestOctet = (int) explode('.', $latestServer->ip)[3];
            return self::$ipPrefix . $iplatestOctet + 1;
        }

        return self::$ipPrefix . self::$firstIP;
    }
}
