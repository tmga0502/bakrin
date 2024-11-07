<?php

namespace Database\Factories;

use App\Models\FavoriteUser;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FavoriteUser>
 */
class FavoriteUserFactory extends Factory
{
    protected $model = FavoriteUser::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $me = User::inRandomOrder()->first();
        $producer = User::whereNotIn('id', [$me->id])->inRandomOrder()->first();
        $favorite = FavoriteUser::where('favorite_by_user_id', $me->id)->where('favorite_user_id', $producer->id)->exists();
        if(!$favorite){
            return [
                'favorite_by_user_id' => $me->id,
                'favorite_user_id' => $producer->id,
            ];
        }
		return [];
    }
}
