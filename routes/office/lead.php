<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;

Route::middleware(['auth', 'verified', 'role:content creator|administrator'])
    ->prefix('office/lead')
    ->group(function () {
        Route::get('/', [LeadController::class, 'index'])->name('office.lead.index');
        Route::get('/create', [LeadController::class, 'create'])->name('office.lead.create');
        Route::post('/', [LeadController::class, 'store'])->name('office.lead.store');
        Route::get('/{lead}/edit', [LeadController::class, 'edit'])->name('office.lead.edit');
        Route::put('/{lead}', [LeadController::class, 'update'])->name('office.lead.update');
        Route::delete('/{lead}', [LeadController::class, 'destroy'])->name('office.lead.destroy');
    });