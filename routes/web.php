<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Http\Controllers\HomeController;
use App\Models\Article;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Solution
Route::prefix('/p')
    ->group(function () {
        Route::get('/asset-management-system', [HomeController::class, 'assetManagementSystem'])->name('asset-management-system');
        Route::get('/inventory', [HomeController::class, 'inventory'])->name('inventory');
        Route::get('/ticketing', [HomeController::class, 'ticketing'])->name('ticketing');
    });

// Services
Route::prefix('/s')
    ->group(function () {
        Route::get('/custom-software', [HomeController::class, 'customSoftware'])->name('custom-software');
        Route::get('/it-consultant', [HomeController::class, 'it-consultant'])->name('it-consultant');
        Route::get('/it-support', [HomeController::class, 'it-support'])->name('it-support');
        Route::get('/training-certification', [HomeController::class, 'training-certification'])->name('training-certification');
        Route::get('/digital-marketing', [HomeController::class, 'digital-marketing'])->name('digital-marketing');
    });

// Use Cases
Route::prefix('/i')
    ->group(function () {
        Route::get('/pariwisata', [HomeController::class, 'pariwisata'])->name('pariwisata');
        Route::get('/manufacturing', [HomeController::class, 'manufacturing'])->name('manufacturing');
        Route::get('/construction', [HomeController::class, 'construction'])->name('construction');
        Route::get('/real-estate', [HomeController::class, 'real-estate'])->name('real-estate');
        Route::get('/retail', [HomeController::class, 'retail'])->name('retail');
        Route::get('/logistik', [HomeController::class, 'logistik'])->name('logistik');
        Route::get('/hotel', [HomeController::class, 'hotel'])->name('hotel');
        Route::get('/pendidikan', [HomeController::class, 'pendidikan'])->name('pendidikan');
    });

// Blog
Route::prefix('/blog')
    ->group(function () {
        Route::get('/', [HomeController::class, 'blogMain'])->name('blog');
        // Route::get('/cat/{slug}', [BlogController::class, 'category'])->name('blog.category');
        // Route::get('/tags/{slug}', [BlogController::class, 'tag'])->name('blog.tag');
        // Route::get('/z/{slug}', [HomeController::class, 'articleDetail'])->name('blog.detail');
    });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/office/user.php';
require __DIR__.'/office/article.php';
require __DIR__.'/office/category.php';
require __DIR__.'/office/tag.php';
require __DIR__.'/office/role.php';
require __DIR__.'/office/sitemap.php';
require __DIR__.'/office/ckeditor.php';