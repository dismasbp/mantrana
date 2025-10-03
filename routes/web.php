<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/blog', [HomeController::class, 'article'])->name('blog');
Route::get('/portofolio', [HomeController::class, 'portofolio'])->name('portofolio');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

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
require __DIR__.'/office/ckeditor.php';