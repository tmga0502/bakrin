<?php

namespace Database\Seeders;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Random\RandomException;

class ItemImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws RandomException
     */
    public function run(): void
    {
        DB::table('item_images')->truncate();

        $items = Item::all();
        $now = Carbon::now();
        foreach($items as $item){
            $imagesCount = random_int(0, 6);
            if($imagesCount > 0){
                $insertArray = [];
                for($i=0; $i < $imagesCount; $i++){
                    $imgRandomInt = random_int(1, 4000);
                    $insertArray[] = [
                        'itemId' => $item->id,
                        'path' => 'https://picsum.photos/400/200/?random=' . $imgRandomInt,
                        'created_at' => $now,
                        'updated_at' => $now
                    ];
                }
                DB::table('item_images')->insert($insertArray);
            }
        }
    }
}
