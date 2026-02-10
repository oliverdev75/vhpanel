<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

abstract class Controller
{
    
    protected function checkPermission(Request $request, string $permission)
    {
        return $request->user()->role->permissions->contains('name', $permission);
    }

    protected function userCan(Request $request)
    {
        
    }

}
