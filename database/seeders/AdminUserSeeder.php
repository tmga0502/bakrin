<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admin_users')->truncate();

        $now = Carbon::now();
        DB::table('admin_users')->insert([
            [
                'name' => '山村拓弥',
                'login_id' => 'tmga0502',
                'password' => Hash::make('a12345'),
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
