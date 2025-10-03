<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/tag')
    ->group(function () {
        Route::get('/', [TagController::class, 'index'])->name('office.tag.index');
        Route::get('/create', [TagController::class, 'create'])->name('office.tag.create');
        Route::post('/', [TagController::class, 'store'])->name('office.tag.store');
        Route::get('/{tag}/edit', [TagController::class, 'edit'])->name('office.tag.edit');
        Route::put('/{tag}', [TagController::class, 'update'])->name('office.tag.update');
        Route::delete('/{tag}', [TagController::class, 'destroy'])->name('office.tag.destroy');
    });
