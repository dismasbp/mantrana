<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('home', [
            'title' => 'Mantrana',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function AssetManagementSystem()
    {
        return Inertia::render('solutions/asset-management-system', [
            'title' => 'Asset Management System',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function CustomSoftware()
    {
        return Inertia::render('services/custom-software', [
            'title' => 'Custom Software',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
}
