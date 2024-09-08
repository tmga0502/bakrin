<?php

namespace Database\Factories;

use App\Models\FavoriteProducer;
use App\Models\Item;
use App\Models\Producer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavoriteProducer>
 */
class FavoriteProducerFactory extends Factory
{
    protected $model = FavoriteProducer::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $me = Producer::inRandomOrder()->first();
        $producer = Producer::whereNotIn('id', [$me->id])->inRandomOrder()->first();
        $favorite = FavoriteProducer::where('myUuid', $me->uuid)->where('producerUuid', $producer->uuid)->exists();
        if(!$favorite){
            return [
                'myUuid' => $me->uuid,
                'producerUuid' => $producer->uuid,
            ];
        }
		return [];
    }
}
