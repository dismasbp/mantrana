<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'slug',
    ];

    /**
     * Relation with Article (One-to-Many)
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
