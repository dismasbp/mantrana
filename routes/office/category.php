<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/category')
    ->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('office.category.index');
        Route::get('/create', [CategoryController::class, 'create'])->name('office.category.create');
        Route::post('/', [CategoryController::class, 'store'])->name('office.category.store');
        Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('office.category.edit');
        Route::put('/{category}', [CategoryController::class, 'update'])->name('office.category.update');
        Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('office.category.destroy');
    });
