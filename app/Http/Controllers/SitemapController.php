<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\SitemapEntry;
use Carbon\Carbon;

class SitemapController extends Controller
{
    /**
     * Generating Sitemap.
     */
    public function generate(): RedirectResponse
    {
        Artisan::call('sitemap:generate');
        return back()->with('success', '✅ Sitemap berhasil diperbarui!');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $entries = SitemapEntry::orderBy('priority', 'desc')->get()->map(function ($item) {
            Carbon::setLocale('id');
            $item->lastmod = Carbon::parse($item->lastmod)->translatedFormat('d F Y H:i');
            return $item;
        });

        return Inertia::render('office/sitemap/index', [
            'entries'       => $entries,
            'title'         => 'Sitemap Management',
            'description'   => 'Kelola dan generate sitemap.xml secara dinamis'
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
        $data = $request->validate([
            'loc' => 'required|string|max:255',
            'changefreq' => 'required|string|max:20',
            'priority' => 'required|numeric|min:0.1|max:1.0',
        ]);

        $data['lastmod'] = now();

        SitemapEntry::create($data);

        return back()->with('success', 'URL berhasil ditambahkan!');
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
    public function update(Request $request, SitemapEntry $sitemap)
    {
        $data = $request->validate([
            'loc' => 'required|string|max:255',
            'changefreq' => 'required|string|max:20',
            'priority' => 'required|numeric|min:0.1|max:1.0',
        ]);

        $data['lastmod'] = now();
        $sitemap->update($data);

        return back()->with('success', 'URL berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SitemapEntry $sitemap)
    {
        $sitemap->delete();

        return back()->with('success', 'URL berhasil dihapus!');
    }
}
