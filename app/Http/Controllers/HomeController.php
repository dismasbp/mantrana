<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Article;

class HomeController extends Controller
{
    /**
     * Display a Home Page of the resource.
     */
    public function index()
    {
        return Inertia::render('home', [
            'title' => 'Mantrana',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a Asset Management System Page of the resource.
     */
    public function assetManagementSystem()
    {
        return Inertia::render('solutions/asset-management-system', [
            'title' => 'Asset Management System',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a Custom Software Page of the resource.
     */
    public function customSoftware()
    {
        return Inertia::render('services/custom-software', [
            'title' => 'Custom Software',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a Pariwisata Page of the resource.
     */
    public function pariwisata()
    {
        return Inertia::render('use-cases/pariwisata', [
            'title' => 'Pariwisata',
            'description' => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a Blog Main Page of the resource.
     */
    public function blogMain()
    {
        $articles = Article::orderBy('created_at', 'desc')
            ->take(7)
            ->get(['id', 'title', 'slug', 'photo', 'photo_alt', 'photo_caption', 'created_at']);
        return Inertia::render('blogs/mainpage', [
            'articles' => $articles,
            'title' => 'Blog Main Page',
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
