<?php

namespace Database\Factories;

use App\Models\ItemVariety;
use App\Models\User;
use App\Models\WantItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<WantItem>
 */
class WantItemFactory extends Factory
{
    protected $model = WantItem::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $producer = User::inRandomOrder()->first();
        $variety = ItemVariety::inRandomOrder()->first();
        return [
            'user_id' => $producer->id,
            'item_variety_id' => $variety->id,
        ];
    }
}
