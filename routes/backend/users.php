<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth', 'role:administrator'])
    ->prefix('office/users')
    ->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('office.users.index');
        Route::get('/create', [UserController::class, 'create'])->name('office.users.create');
        Route::post('/', [UserController::class, 'store'])->name('office.users.store');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('office.users.edit');
        Route::put('/{user}', [UserController::class, 'update'])->name('office.users.update');
        Route::delete('/{user}', [UserController::class, 'destroy'])->name('office.users.destroy');
    });
