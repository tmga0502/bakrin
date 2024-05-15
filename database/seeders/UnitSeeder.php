<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('units')->truncate();

        $now = Carbon::now();
        DB::table('units')->insert([
            ['name' => 'g', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'kg', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 't', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '個', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '本', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '束', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '枚', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '袋', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '房', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '節', 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
