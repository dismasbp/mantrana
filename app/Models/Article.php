<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'fulltext',
        'photo',
        'photo_alt',
        'photo_caption',
        'meta_title',
        'meta_description',
        'slug',
        'code_snippet',
    ];

    /**
     * Slug Generator
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            if (empty($article->slug)) {
                $article->slug = Str::slug($article->title);
            }
        });

        static::updating(function ($article) {
            if ($article->isDirty('title')) {
                $article->slug = Str::slug($article->title);
            }
        });
    }

    /**
     * Relation with Category (Many-to-One)
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Relation with Tag (Many-to-Many)
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'tag_relations', 'article_id', 'tag_id');
    }
}
