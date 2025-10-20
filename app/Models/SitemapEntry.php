<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SitemapEntry extends Model
{
    protected $table = 'sitemaps';
    protected $fillable = ['loc', 'lastmod', 'changefreq', 'priority'];
}
