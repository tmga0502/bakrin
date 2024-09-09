<?php

namespace Database\Factories;

use App\Models\Message;
use App\Models\MessageGroup;
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
		$now = Carbon::now();
		return [
			'messageGroupId' => 0,
			'senderUuid' => $this->faker->word,
			'receiverUuid' => $this->faker->word,
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
				'messageGroupId' => $id,
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

	public function withReceiver($receiver): MessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($receiver) {
			return [
				'receiverUuid' => $receiver,
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
