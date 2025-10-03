<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RolePermissionSeeder extends Seeder
{
    public function run()
    {
        // 1. Create roles
        $admin      = Role::firstOrCreate(['name' => 'administrator']);
        $creator    = Role::firstOrCreate(['name' => 'content creator']);
        $marketing  = Role::firstOrCreate(['name' => 'marketing']);

        // 2. Create permissions
        // Article
        Permission::firstOrCreate(['name' => 'create articles']);
        Permission::firstOrCreate(['name' => 'edit articles']);
        Permission::firstOrCreate(['name' => 'delete articles']);
        Permission::firstOrCreate(['name' => 'view articles']);

        // Category
        Permission::firstOrCreate(['name' => 'create categories']);
        Permission::firstOrCreate(['name' => 'edit categories']);
        Permission::firstOrCreate(['name' => 'delete categories']);
        Permission::firstOrCreate(['name' => 'view categories']);

        // Tag
        Permission::firstOrCreate(['name' => 'create tags']);
        Permission::firstOrCreate(['name' => 'edit tags']);
        Permission::firstOrCreate(['name' => 'delete tags']);
        Permission::firstOrCreate(['name' => 'view tags']);

        // Modul User
        Permission::firstOrCreate(['name' => 'manage users']);

        // Modul Dashboard
        Permission::firstOrCreate(['name' => 'view dashboard']);

        // 3. Assign permission to role
        $admin->givePermissionTo(Permission::all()); // akses penuh
        $creator->givePermissionTo([
            // Article
            'view articles',
            'create articles',
            'edit articles',
            'delete articles',
            // Category
            'view categories',
            'create categories',
            'edit categories',
            'delete categories',
            // Tag
            'view tags',
            'create tags',
            'edit tags',
            'delete tags',
        ]);
        $marketing->givePermissionTo([
            // Article
            'view articles',
            // Category
            'view categories',
            // Tag
            'view tags',
        ]);

        // 4. Assign role to user
        User::find(1)?->assignRole('administrator');
        // User::find(2)?->assignRole('content creator');
        // User::find(3)?->assignRole('marketing');
    }
}