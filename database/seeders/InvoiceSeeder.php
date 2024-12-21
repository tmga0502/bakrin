<?php

namespace Database\Seeders;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Random\RandomException;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws RandomException
     */
    public function run(): void
    {
        DB::table('invoices')->truncate();
    }
}
