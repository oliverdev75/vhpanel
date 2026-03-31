<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Services\KVMService;
use Illuminate\Http\Request;

class ServerController extends Controller
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

    public function boot(Server $id)
    {
        $this->kvm->bootServer($id);
    }
}
