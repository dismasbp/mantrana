<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::prefix('contact')
    ->group(function () {
        Route::get('/', [HomeController::class, 'contact'])->name('contact');
        Route::post('/', [HomeController::class, 'contactform'])->name('contact.store');
    });