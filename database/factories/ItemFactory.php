<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\ItemVariety;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Random\RandomException;

/**
 * @extends Factory<Item>
 */
class ItemFactory extends Factory
{
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * @throws RandomException
     */
    public function definition(): array
    {
        $user = User::inRandomOrder()->first();
        $categoryId = random_int(1, 4);
        $variety = ItemVariety::inRandomOrder()->first();
        $obj = ItemVariety::where('item_category_id', $categoryId)->inRandomOrder()->first();
        $name = $obj->name;

        $partArray = ['上旬', '中旬', '下旬'];
        $now = $this->faker->dateTimeBetween('-1 month', '-1 day');
        $imgRandomInt = random_int(1, 25);
        return [
            'uuid' => (string) Str::uuid(),
            'user_id' => $user->id,
            'item_category_id' => $categoryId,
            'item_variety_id' => $variety->id,
            'name' => $name,
            'count' => random_int(5, 100),
            'unit_id' => random_int(1, 10),
            'guide_count' => random_int(5, 100),
            'guide_unit_id' => random_int(1, 10),
            'plan_id' => random_int(1, 3),
            'description' => $this->faker->realText,
            'shipping_start' => random_int(1, 12),
            'shipping_start_part' => $partArray[array_rand($partArray)],
            'shipping_end' => random_int(1, 12),
            'shipping_end_part' => $partArray[array_rand($partArray)],
            'status' => random_int(0, 1),
//            'thumbnail' => 'https://picsum.photos/400/200/?random=' . $imgRandomInt,
            'thumbnail_path' => url('dummyImages/' . $imgRandomInt . '.jpg'),
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }
}
