<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'photo',
        'photo_alt',
        'photo_caption',
        'meta_title',
        'meta_description',
    ];

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
        return $this->belongsToMany(Tag::class, 'tag_relations')
            ->withTimestamps();
    }
}
