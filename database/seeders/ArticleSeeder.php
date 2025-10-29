<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        if (!Storage::disk('public')->exists('articles')) {
            Storage::disk('public')->makeDirectory('articles');
        }

        $photos = [
            'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp',
            'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg',
        ];
        
        $now = now();
        for ($i = 1; $i <= 30; $i++) {
            $title = "Sample Article Title $i" . time();

            $article = Article::create([
                'category_id'      => rand(1, 2),
                'title'            => $title,
                'fulltext'         => "This is sample content for article number $i.",
                'photo'            => $photos[array_rand($photos)],
                'photo_alt'        => "Sample Alt Text $i",
                'photo_caption'    => "Sample caption for Article $i",
                'meta_title'       => "$title Meta Title",
                'meta_description' => "Meta description for Article $i.",
                'slug'             => Str::slug($title),
                'code_snippet'     => "<p>Sample code snippet $i</p>",
                'created_at'       => $now->copy()->subMinutes($i),
                'updated_at'       => $now->copy()->subMinutes($i),
            ]);

            $article->tags()->sync([1, 2]);
        }
    }
}