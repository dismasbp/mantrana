<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/categories')
    ->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('office.categories.index');
        Route::get('/create', [CategoryController::class, 'create'])->name('office.categories.create');
        Route::post('/', [CategoryController::class, 'store'])->name('office.categories.store');
        Route::get('/{article}/edit', [CategoryController::class, 'edit'])->name('office.categories.edit');
        Route::put('/{article}', [CategoryController::class, 'update'])->name('office.categories.update');
        Route::delete('/{article}', [CategoryController::class, 'destroy'])->name('office.categories.destroy');
    });
