<?php

namespace Database\Factories;

use App\Models\Message;
use App\Models\Producer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Message>
 */
class MessageFactory extends Factory
{
    protected $model = Message::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $myAccount = Producer::inRandomOrder()->first();
        $myUuid = $myAccount->uuid;
        $producerAccount = Producer::whereNotIn('uuid',[$myUuid])->inRandomOrder()->first();
        $producerUuid = $producerAccount->uuid;
        $now = Carbon::now();
        return [
            'myUuid' => $myUuid,
            'producerUuid' => $producerUuid,
            'message' => $this->faker->realText(100,5),
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }
}
