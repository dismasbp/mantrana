<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/tags')
    ->group(function () {
        Route::get('/', [TagController::class, 'index'])->name('office.tags.index');
        Route::get('/create', [TagController::class, 'create'])->name('office.tags.create');
        Route::post('/', [TagController::class, 'store'])->name('office.tags.store');
        Route::get('/{article}/edit', [TagController::class, 'edit'])->name('office.tags.edit');
        Route::put('/{article}', [TagController::class, 'update'])->name('office.tags.update');
        Route::delete('/{article}', [TagController::class, 'destroy'])->name('office.tags.destroy');
    });
