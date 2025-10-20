<?php

namespace App\Observers;

use App\Models\Article;
use Illuminate\Support\Facades\Artisan;

class ArticleObserver
{
    public function saved(Article $article): void
    {
        Artisan::call('sitemap:generate');
    }

    public function deleted(Article $article): void
    {
        Artisan::call('sitemap:generate');
    }
}