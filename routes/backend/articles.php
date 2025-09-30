<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/articles')
    ->group(function () {
        Route::get('/', [ArticleController::class, 'index'])->name('office.articles.index');
        Route::get('/create', [ArticleController::class, 'create'])->name('office.articles.create');
        Route::post('/', [ArticleController::class, 'store'])->name('office.articles.store');
        Route::get('/{article}/edit', [ArticleController::class, 'edit'])->name('office.articles.edit');
        Route::put('/{article}', [ArticleController::class, 'update'])->name('office.articles.update');
        Route::delete('/{article}', [ArticleController::class, 'destroy'])->name('office.articles.destroy');
    });
