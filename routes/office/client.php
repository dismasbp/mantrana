<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/client')
    ->group(function () {
        Route::get('/', [ClientController::class, 'index'])->name('office.client.index');
        Route::get('/create', [ClientController::class, 'create'])->name('office.client.create');
        Route::post('/', [ClientController::class, 'store'])->name('office.client.store');
        Route::get('/{client}/edit', [ClientController::class, 'edit'])->name('office.client.edit');
        Route::put('/{client}', [ClientController::class, 'update'])->name('office.client.update');
        Route::delete('/{client}', [ClientController::class, 'destroy'])->name('office.client.destroy');
    });