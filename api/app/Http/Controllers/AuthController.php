<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            "email" => "email|required",
            "password" => "required"
        ]);

        if (Auth::attempt($credentials, $request->remember_me)) {
            $token = $request->user()->createToken("auth_token");
            return response()->json(["token" => $token->plainTextToken]);
        }
        
        return response()->json(["Invalid credentials"], 401);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(["message" => "Token revoked successfully"]);
    }

    public function data(Request $request)
    {
        return response()->json([
            'data' => User::with(['servers', 'oses.versions'])->find($request->user()->id)
        ]);
    }
}
