<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Article;
use App\Models\SitemapEntry;
use Carbon\Carbon;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate sitemap.xml and save it to public folder';

    public function handle()
    {
        $domain = rtrim(config('app.url') ?? 'https://mantrana.co.id', '/');

        $sitemap = Sitemap::create();
        //     ->add(Url::create("{$domain}/")->setPriority(1.0)->setChangeFrequency('weekly'))

        //     // Solutions
        //     ->add(Url::create("{$domain}/p/asset-management-system")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/p/inventory")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/p/ticketing")->setPriority(0.8)->setChangeFrequency('monthly'))

        //     // Services
        //     ->add(Url::create("{$domain}/s/custom-software")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/s/it-consultant")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/s/it-support")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/s/training-certification")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/s/digital-marketing")->setPriority(0.8)->setChangeFrequency('monthly'))

        //     // Use Cases
        //     ->add(Url::create("{$domain}/i/pariwisata")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/manufacturing")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/construction")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/real-estate")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/retail")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/logistik")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/hotel")->setPriority(0.8)->setChangeFrequency('monthly'))
        //     ->add(Url::create("{$domain}/i/pendidikan")->setPriority(0.8)->setChangeFrequency('monthly'))

        //     // Blog main page
        //     ->add(Url::create("{$domain}/blog")->setPriority(0.8)->setChangeFrequency('weekly'));

        // Get Sitemap entries from database
        foreach (SitemapEntry::all() as $entry) {
            $sitemap->add(
                Url::create($entry->loc)
                    ->setLastModificationDate($entry->lastmod ? Carbon::parse($entry->lastmod) : now())
                    ->setChangeFrequency($entry->changefreq)
                    ->setPriority($entry->priority)
            );
        }

        // Blog dinamis
        $articles = Article::select('slug', 'updated_at')->get();
        foreach ($articles as $article) {
            $sitemap->add(
                Url::create("{$domain}/blog/z/{$article->slug}")
                    ->setLastModificationDate($article->updated_at)
                    ->setPriority(0.5)
                    ->setChangeFrequency('weekly')
            );
        }

        // Simpan ke public/sitemap.xml
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generated successfully: ' . public_path('sitemap.xml'));
    }
}
