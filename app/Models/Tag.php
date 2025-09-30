<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

    /**
     * Relation with Article (Many-to-Many)
     */
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'tag_relations')
            ->withTimestamps();
    }
}
