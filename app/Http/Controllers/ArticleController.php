<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = Category::all();
        $tags       = Tag::all();
        $query      = Article::with(['category', 'tags']);

        if ($search = $request->get('search')) {
            $query->where('title', 'like', "%{$search}%")
                  ->orWhere('meta_title', 'like', "%{$search}%")
                  ->orWhere('meta_description', 'like', "%{$search}%");
        }

        $articles = $query->latest()->paginate(10);

        if ($request->wantsJson()) {
            return response()->json($articles);
        }

        return Inertia::render('office/article/index', [
            'articles'   => $articles,
            'categories' => $categories,
            'tags'       => $tags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id'      => 'nullable|exists:categories,id',
            'title'            => 'required|string|max:255',
            'fulltext'         => 'nullable|string',
            'photo'            => 'nullable|image|max:2048',
            'photo_alt'        => 'nullable|string|max:255',
            'photo_caption'    => 'nullable|string|max:255',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'code_snippet'     => 'nullable|string',
            'tags'             => 'nullable|array',
            'tags.*'           => 'exists:tags,id',
        ]);

        $data = $request->only([
            'category_id', 'title', 'fulltext', 'photo_alt', 
            'photo_caption', 'meta_title', 'meta_description', 'code_snippet'
        ]);

        // Handle photo upload
        if ($request->hasFile('photo')) {
            // Validate Folder
            if (!Storage::disk('public')->exists('articles')) {
                Storage::disk('public')->makeDirectory('articles');
            }
            $data['photo'] = $request->file('photo')->store('articles', 'public');
        }

        $article = Article::create($data);

        // Attach tags
        if ($request->filled('tags')) {
            $article->tags()->sync($request->tags);
        }

        return redirect()->back()->with('success', 'Article created.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        $categories = Category::all();
        $tags       = Tag::all();

        return Inertia::render('office/article/edit', [
            'article'    => $article->load('category', 'tags'),
            'categories' => $categories,
            'tags'       => $tags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'category_id'      => 'nullable|exists:categories,id',
            'title'            => 'required|string|max:255',
            'fulltext'         => 'nullable|string',
            'photo'            => 'nullable|image|max:2048',
            'photo_alt'        => 'nullable|string|max:255',
            'photo_caption'    => 'nullable|string|max:255',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'code_snippet'     => 'nullable|string',
            'tags'             => 'nullable|array',
            'tags.*'           => 'exists:tags,id',
        ]);

        $data = $request->only([
            'category_id', 'title', 'fulltext', 'photo_alt', 
            'photo_caption', 'meta_title', 'meta_description', 'code_snippet'
        ]);

        // Handle photo upload
        if ($request->hasFile('photo')) {
            // Removing Old Photo
            if ($article->photo) {
                Storage::disk('public')->delete($article->photo);
            }

            // Validate Folder
            if (!Storage::disk('public')->exists('articles')) {
                Storage::disk('public')->makeDirectory('articles');
            }

            $data['photo'] = $request->file('photo')->store('articles', 'public');
        }

        $article->update($data);

        if ($request->filled('tags')) {
            $article->tags()->sync($request->tags);
        } else {
            $article->tags()->detach();
        }

        return redirect()->route('office.article.index')->with('success', 'Article updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        // Remove Photo If Exist
        if ($article->photo) {
            Storage::disk('public')->delete($article->photo);
        }

        $article->tags()->detach();
        $article->delete();

        return redirect()->back()->with('success', 'Article deleted.');
    }
}
