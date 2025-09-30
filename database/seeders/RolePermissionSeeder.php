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
        $admin      = Role::create(['name' => 'administrator']);
        $creator    = Role::create(['name' => 'content creator']);
        $marketing  = Role::create(['name' => 'marketing']);

        // 2. Create permissions
        // Article
        Permission::create(['name' => 'create articles']);
        Permission::create(['name' => 'edit articles']);
        Permission::create(['name' => 'delete articles']);
        Permission::create(['name' => 'view articles']);

        // Category
        Permission::create(['name' => 'create categories']);
        Permission::create(['name' => 'edit categories']);
        Permission::create(['name' => 'delete categories']);
        Permission::create(['name' => 'view categories']);

        // Tag
        Permission::create(['name' => 'create tags']);
        Permission::create(['name' => 'edit tags']);
        Permission::create(['name' => 'delete tags']);
        Permission::create(['name' => 'view tags']);

        // Modul User
        Permission::create(['name' => 'manage users']);

        // Modul Dashboard
        Permission::create(['name' => 'view dashboard']);

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
        User::find(2)?->assignRole('content creator');
        User::find(3)?->assignRole('marketing');
    }
}