<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;

Route::middleware(['auth', 'verified'])->post('/upload-image', [UploadController::class, 'upload'])->name('ckeditor.upload');