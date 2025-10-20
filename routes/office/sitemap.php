<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\SitemapEntryController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/sitemap')
    ->group(function () {
        Route::get('/', [SitemapController::class, 'index'])->name('office.sitemap.index');
        Route::get('/create', [SitemapController::class, 'create'])->name('office.sitemap.create');
        Route::post('/', [SitemapController::class, 'store'])->name('office.sitemap.store');
        Route::get('/{sitemap}/edit', [SitemapController::class, 'edit'])->name('office.sitemap.edit');
        Route::put('/{sitemap}', [SitemapController::class, 'update'])->name('office.sitemap.update');
        Route::delete('/{sitemap}', [SitemapController::class, 'destroy'])->name('office.sitemap.destroy');
        Route::post('/generate', [SitemapController::class, 'generate'])->name('office.sitemap.generate');
    });