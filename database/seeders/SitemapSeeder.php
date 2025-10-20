<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SitemapEntry;

class SitemapSeeder extends Seeder
{
    public function run(): void
    {
        $domain = config('app.url');

        $urls = [
            // Home
            ['loc' => "{$domain}/", 'priority' => 1.0, 'changefreq' => 'weekly'],

            // Solutions
            ['loc' => "{$domain}/p/asset-management-system", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/p/inventory", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/p/ticketing", 'priority' => 0.8, 'changefreq' => 'monthly'],

            // Services
            ['loc' => "{$domain}/s/custom-software", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/s/it-consultant", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/s/it-support", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/s/training-certification", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/s/digital-marketing", 'priority' => 0.8, 'changefreq' => 'monthly'],

            // Use Cases
            ['loc' => "{$domain}/i/pariwisata", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/manufacturing", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/construction", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/real-estate", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/retail", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/logistik", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/hotel", 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['loc' => "{$domain}/i/pendidikan", 'priority' => 0.8, 'changefreq' => 'monthly'],

            // Blog
            ['loc' => "{$domain}/blog", 'priority' => 0.8, 'changefreq' => 'weekly'],
        ];

        foreach ($urls as $url) {
            SitemapEntry::updateOrCreate(
                ['loc' => $url['loc']],
                [
                    'priority' => $url['priority'],
                    'changefreq' => $url['changefreq'],
                    'lastmod' => now(),
                ]
            );
        }
    }
}
