<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Tag;
use App\Models\Category;

class HomeController extends Controller
{
    /**
     * Display a Home Page of the resource.
     */
    public function index()
    {
        return Inertia::render('home', [
            'title' => 'Software ERP Indonesia, Custom Sesuai Kebutuhan Bisnis Anda',
            'description' => 'Custom software ERP sesuai dengan kebutuhan perusahaan Anda. Kembangkan fitur yang tepat untuk kelola bisnis secara otomatis & dapatkan penawaran terbaik.'
        ]);
    }

    /**
     * Display a Asset Management System Page of the resource.
     */
    public function assetManagementSystem()
    {
        return Inertia::render('solutions/asset-management-system', [
            'title' => 'Asset Management Software​, Custom sesuai Kebutuhan Bisnis Anda',
            'description' => 'Custom asset management software untuk kebutuhan perusahaan. Kelola pelacakan, pemeliharaan, & pengoptimalan bisnis lebih mudah. Dapatkan penawaran harga terbaik.'
        ]);
    }

    /**
     * Display a Custom Software Page of the resource.
     */
    public function customSoftware()
    {
        return Inertia::render('services/custom-software', [
            'title' => 'Solusi Custom ERP Software No.1 Indonesia | Mantrana',
            'description' => 'Solusi Custom Software untuk segala industri yang dirancang sesuai proses bisnis di perusahan Anda. Tingkatkan produktivitas & dapatkan penawaran harga terbaik.'
        ]);
    }

    /**
     * Display a Pariwisata Page of the resource.
     */
    public function pariwisata()
    {
        return Inertia::render('use-cases/pariwisata', [
            'title' => 'Software for Tourism Industry, Custom Kebutuhan Bisnis Anda',
            'description' => 'Kelola bisnis pariwisata lebih optimal & efisien dengan custom software yang disesuaikan kebutuhan perusahaan Anda. Dapatkan penawaran harga terbaik sekarang.'
        ]);
    }

    /**
     * Display a Blog Main Page of the resource.
     */
    public function blogMain(Request $request)
    {
        $sort = $request->get('sort', 'latest');

        $order = $sort === 'oldest' ? 'asc' : 'desc';

        $featured = Article::orderBy('created_at', 'desc')
            ->take(7)
            ->get();

        $articles = Article::orderBy('created_at', $order)
            ->skip(7)
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('blogs/mainpage', [
            'featured'      => $featured,
            'articles'      => $articles,
            'sort'          => $sort,
            'headerTitle'   => 'Blogs',
            'headerBadge'   => 'Blogs',
            'title'         => 'Blogs',
            'description'   => 'Empowering Society Through Digital Transformation'
        ]);
    }

    /**
     * Display a Blog Main Page of the resource.
     */
    public function tag(Request $request, $slug)
    {
        $tag = Tag::where('slug', $slug)->firstOrFail();

        $sort = $request->get('sort', 'latest');
        $order = $sort === 'oldest' ? 'asc' : 'desc';

        $featured = $tag->articles()
            ->orderBy('created_at', $order)
            ->take(7)
            ->get();
        $articles = $tag->articles()
            ->orderBy('created_at', $order)
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('blogs/mainpage', [
            'featured'      => $featured,
            'articles'      => $articles,
            'sort'          => $sort,
            'tag'           => $tag,
            'headerTitle'   => $tag->name,
            'headerBadge'   => 'Tag',
            'title'         => 'Tag: ' . $tag->name,
            'description'   => 'Tag Artikel: ' . $tag->name,
        ]);
    }


    /**
     * Display a Blog Main Page of the resource.
     */
    public function category(Request $request, $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();

        $sort = $request->get('sort', 'latest');
        $order = $sort === 'oldest' ? 'asc' : 'desc';

        $featured = $category->articles()
            ->orderBy('created_at', $order)
            ->take(7)
            ->get();

        $articles = $category->articles()
            ->orderBy('created_at', $order)
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('blogs/mainpage', [
            'featured'      => $featured,
            'articles'      => $articles,
            'sort'          => $sort,
            'category'      => $category,
            'headerTitle'   => $category->name,
            'headerBadge'   => 'Kategori',
            'title'         => $category->name,
            'description'   => 'Kategori: ' . $category->name,
        ]);
    }

    /**
     * Display a Blog Detail Page of the resource.
     */
    public function blogDetail($slug)
    {
        $articles = Article::with('category', 'tags')
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();
        $article = Article::with('category', 'tags')
            ->where('slug', $slug)
            ->firstOrFail();
        $previous = Article::where('id', '<', $article->id)
            ->orderBy('id', 'desc')
            ->first();
        $next = Article::where('id', '>', $article->id)
            ->orderBy('id', 'asc')
            ->first();

        return Inertia::render('blogs/detail', [
            'article'       => $article,
            'articles'      => $articles,
            'previous'      => $previous,
            'next'          => $next,
            'title'         => $article->title,
            'description'   => $article->meta_description
        ]);
    }

    /**
     * Display a About Page of the resource.
     */
    public function about()
    {
        return Inertia::render('about', [
            'title' => 'Tentang Mantrana',
            'description' => 'About Mantrana.'
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
