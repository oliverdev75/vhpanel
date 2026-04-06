<?php

namespace App\Http\Controllers;

use App\Models\OSVersion;
use App\Models\Server;
use App\Services\KVMService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function __construct(
        protected KVMService $kvm
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function servers(Request $request)
    {
        return response()->json([
            'data' => Server::with('os_version.os', 'disks')->where('active_user_id', $request->user()->id)->get()
        ]);
    }

    public function storeServer(Request $request)
    {
        $data = $request->validate([
            'name' => 'string',
            'description' => 'string',
            'os_version_id' => 'number',
            'cores' => 'number',
            'memory' => 'number'
        ]);

        Server::create([
            ...$data,
            'active_user_id' => $request->user->id,
            'os_version_id' => 'number'
        ]);

        $osVersion = OSVersion::find($data['os_version_id']);

        $this->kvm->createServer("{$request->user->id}_{$data['name']}", $data['memory'], $data['cores']);
    }
}
