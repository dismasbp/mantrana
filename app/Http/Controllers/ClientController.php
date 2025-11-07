<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::paginate(10);
        return Inertia::render('office/client/index', [
            'clients' => $clients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     return view('clients.create');
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'status' => 'boolean',
        ]);

        $validated['status'] = $request->boolean('status', true);

        if ($request->hasFile('image')) {
            if (!Storage::disk('public')->exists('clients')) {
                Storage::disk('public')->makeDirectory('clients');
            }

            $path = $request->file('image')->store('clients', 'public');
            $validated['image'] = $path;
        }

        Client::create($validated);

        return redirect()->back()->with('success', 'Client created.');
    }

    /**
     * Display the specified resource.
     */
    // public function show(Client $client)
    // {
    //     return view('office/clients/show', compact('client'));
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        return Inertia::render('office/client/edit', [
            'client' => $client,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'name'   => 'required|string|max:255',
            'image'  => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'status' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'status']);

        if ($request->hasFile('image')) {
            if ($client->image && Storage::disk('public')->exists($client->image)) {
                Storage::disk('public')->delete($client->image);
            }
            if (!Storage::disk('public')->exists('clients')) {
                Storage::disk('public')->makeDirectory('clients');
            }
            $data['image'] = $request->file('image')->store('clients', 'public');
        }

        $client->update($data);

        return redirect()->route('office.client.index')
            ->with('success', 'Client updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        if ($client->image && Storage::disk('public')->exists($client->image)) {
            Storage::disk('public')->delete($client->image);
        }

        $client->delete();

        return redirect()->back()->with('success', 'Client deleted successfully.');
    }
}
