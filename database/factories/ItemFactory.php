<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\ItemVariety;
use App\Models\Producer;
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
        $producer = Producer::inRandomOrder()->first();
        $categoryId = random_int(1, 4);
        $variety = ItemVariety::inRandomOrder()->first();
        $obj = ItemVariety::where('categoryId', $categoryId)->inRandomOrder()->first();
        $name = $obj->name;

        $partArray = ['上旬', '中旬', '下旬'];
        $now = $this->faker->dateTimeBetween('-1 month', '-1 day');
        $imgRandomInt = random_int(1, 4000);
        return [
            'uuid' => (string) Str::uuid(),
            'producerUuid' => $producer->uuid,
            'varietyId' => $variety->id,
            'name' => $name,
            'categoryId' => $categoryId,
            'count' => random_int(5, 100),
            'unitId' => random_int(1, 10),
            'guideCount' => random_int(5, 100),
            'guideUnitId' => random_int(1, 10),
            'planId' => random_int(1, 3),
            'description' => $this->faker->realText,
            'shippingStart' => random_int(1, 12),
            'shippingStartPart' => $partArray[array_rand($partArray)],
            'shippingEnd' => random_int(1, 12),
            'shippingEndPart' => $partArray[array_rand($partArray)],
            'status' => random_int(0, 1),
            'thumbnail' => 'https://picsum.photos/400/200/?random=' . $imgRandomInt,
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }
}
