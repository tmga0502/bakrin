<?php

namespace Database\Factories;

use App\Models\Agent;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Random\RandomException;


/**
 * @extends Factory<User>
 */
class AgentFactory extends Factory
{
	protected $model = Agent::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 * @throws RandomException
	 */
	public function definition()
	{
		$now = $this->faker->dateTimeBetween('-3 month', '-1 day');
		do {
			$referral_code = 'a' . $this->randomAlphanumericString(4);
		} while (Agent::where('referral_code', $referral_code)->exists());

		return [
			'uuid'             => (string)Str::uuid(),
			'referral_code'    => $referral_code,
			'name'             => $this->faker->name,
			'email'            => $this->faker->safeEmail,
			'password'         => Hash::make('a12345'),
			'status'           => 1,
			'created_at'       => $now,
			'updated_at'       => $now,
		];
	}

	private function randomAlphanumericString($length)
	{
		$characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		$charactersLength = strlen($characters);
		$randomString = '';

		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[random_int(0, $charactersLength - 1)];
		}

		return $randomString;
	}
}
