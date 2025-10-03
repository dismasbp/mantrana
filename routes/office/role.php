<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/role')
    ->group(function () {
        Route::get('/', [RoleController::class, 'index'])->name('office.role.index');
        Route::get('/create', [RoleController::class, 'create'])->name('office.role.create');
        Route::post('/', [RoleController::class, 'store'])->name('office.role.store');
        Route::get('/{role}/edit', [RoleController::class, 'edit'])->name('office.role.edit');
        Route::put('/{role}', [RoleController::class, 'update'])->name('office.role.update');
        Route::delete('/{role}', [RoleController::class, 'destroy'])->name('office.role.destroy');
    });
