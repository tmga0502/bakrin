<?php

namespace Database\Factories;

use App\Models\FavoriteItem;
use App\Models\Item;
use App\Models\Producer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavoriteItem>
 */
class FavoriteItemFactory extends Factory
{
    protected $model = FavoriteItem::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $producer = Producer::inRandomOrder()->first();
        $item = Item::whereNotIn('producerUuid', [$producer->uuid])->inRandomOrder()->first();
        $favorite = FavoriteItem::where('myUuid', $producer->uuid)->where('itemUuid', $item->uuid)->exists();
        if(!$favorite){
            return [
                'myUuid' => $producer->uuid,
                'itemUuid' => $item->uuid,
            ];
        }
		return [];
    }
}
