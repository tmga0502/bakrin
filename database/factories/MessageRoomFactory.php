<?php

namespace Database\Factories;

use App\Models\Message;
use App\Models\MessageRoom;
use App\Models\Producer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Message>
 */
class MessageRoomFactory extends Factory
{
	protected $model = MessageRoom::class;
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
			'producerUuid1' => $myUuid,
			'producerUuid2' => $producerUuid,
			'created_at' => $now,
			'updated_at' => $now,
		];
	}
}
