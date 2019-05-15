<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Log;


class LogController extends Controller
{
    public function index()
    {
        return Log::all();
    }
 
    public function show($id)
    {
        return Log::find($id);
    }

    public function store(Request $request)
    {
        return Log::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $log = Log::findOrFail($id);
        $log->update($request->all());
        return $log;
    }

    public function delete(Request $request, $id)
    {
        $log = Log::findOrFail($id);
        $log->delete();
        return 204;
    }
}
