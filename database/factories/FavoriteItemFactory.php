<?php

namespace Database\Factories;

use App\Models\FavoriteItem;
use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FavoriteItem>
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
        $producer = User::inRandomOrder()->first();
        $item = Item::whereNotIn('user_id', [$producer->id])->inRandomOrder()->first();
        $favorite = FavoriteItem::where('user_id', $producer->id)->where('item_id', $item->id)->exists();
        if(!$favorite){
            return [
                'user_id' => $producer->id,
                'item_id' => $item->id,
            ];
        }
		return [];
    }
}
