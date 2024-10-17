<?php

namespace Database\Factories;

use App\Models\Producer;
use App\Models\Trade;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends Factory<Trade>
 */
class TradeFactory extends Factory
{
    protected $model = Trade::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $producerAccount = Producer::where('id',[1, 2, 3, 4])->inRandomOrder()->first();
        $producerUuid = $producerAccount->uuid;
		$status = Arr::random([0, 1, 2, 3]);
        $rejectReason = $status === 3 ? $this->faker->realText(100,5) : null;
		$date = $this->faker->dateTimeBetween('-3 month', '-1 day');
        return [
			'uuid' => (string) Str::uuid(),
            'status' => $status,
            'senderUuid' => $producerUuid,
            'rejectReason' => $rejectReason,
            'created_at'=> $date,
            'updated_at'=> $date,
        ];
    }
}
