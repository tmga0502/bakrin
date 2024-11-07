<?php

namespace Database\Factories;

use App\Models\TalkRoomMessage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<TalkRoomMessage>
 */
class TalkRoomMessageFactory extends Factory
{
    protected $model = TalkRoomMessage::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
		$now = Carbon::now();
		return [
			'talk_room_id' => null,
			'user_id' => null,
			'message' => $this->faker->realText(50,5),
			'created_at' => null,
			'updated_at' => null,
		];
    }

	public function withId($id): TalkRoomMessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($id) {
			return [
				'talk_room_id' => $id,
			];
		});
	}

	public function withUserId($userId): TalkRoomMessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($userId) {
			return [
				'user_id' => $userId,
			];
		});
	}

//	public function withReadAt($readAt): TalkRoomMessageFactory|Factory
//	{
//		return $this->state(function (array $attributes) use ($readAt) {
//			return [
//				'read_at' => $readAt,
//			];
//		});
//	}

	public function withDate($date): TalkRoomMessageFactory|Factory
	{
		return $this->state(function (array $attributes) use ($date) {
			return [
				'created_at' => $date,
				'updated_at' => $date,
			];
		});
	}
}
