<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth', 'role:administrator'])
    ->prefix('office/user')
    ->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('office.user.index');
        Route::get('/create', [UserController::class, 'create'])->name('office.user.create');
        Route::post('/', [UserController::class, 'store'])->name('office.user.store');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('office.user.edit');
        Route::put('/{user}', [UserController::class, 'update'])->name('office.user.update');
        Route::delete('/{user}', [UserController::class, 'destroy'])->name('office.user.destroy');
    });
