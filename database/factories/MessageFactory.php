<?php

namespace Database\Factories;

use App\Models\Message;
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
		$now = Carbon::now();
		return [
			'messageRoomId' => 0,
			'senderUuid' => $this->faker->word,
			'message' => $this->faker->realText(50,5),
			'read_at' => $now,
			'created_at' => $now,
			'updated_at' => $now,
		];
    }

	public function withId($id): MessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($id) {
			return [
				'messageRoomId' => $id,
			];
		});
	}

	public function withSender($sender): MessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($sender) {
			return [
				'senderUuid' => $sender,
			];
		});
	}

	public function withReadAt($readAt): MessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($readAt) {
			return [
				'read_at' => $readAt,
			];
		});
	}

	public function withDate($date): MessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($date) {
			return [
				'created_at' => $date,
				'updated_at' => $date,
			];
		});
	}
}
