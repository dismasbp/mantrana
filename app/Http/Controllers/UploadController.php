<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('upload')) {
            if (!Storage::disk('public')->exists('ckeditor')) {
                Storage::disk('public')->makeDirectory('ckeditor');
            }

            $path = $request->file('upload')->store('ckeditor', 'public');

            return response()->json([
                'url' => asset("storage/" . $path)
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }
}