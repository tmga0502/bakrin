<?php

namespace Database\Factories;

use App\Models\ItemVariety;
use App\Models\Producer;
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
        $producer = Producer::inRandomOrder()->first();
        $variety = ItemVariety::inRandomOrder()->first();
        return [
            'myUuid' => $producer->uuid,
            'itemVarietyId' => $variety->id,
        ];
    }
}
