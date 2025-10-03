<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/article')
    ->group(function () {
        Route::get('/', [ArticleController::class, 'index'])->name('office.article.index');
        Route::get('/create', [ArticleController::class, 'create'])->name('office.article.create');
        Route::post('/', [ArticleController::class, 'store'])->name('office.article.store');
        Route::get('/{article}/edit', [ArticleController::class, 'edit'])->name('office.article.edit');
        Route::put('/{article}', [ArticleController::class, 'update'])->name('office.article.update');
        Route::delete('/{article}', [ArticleController::class, 'destroy'])->name('office.article.destroy');
    });