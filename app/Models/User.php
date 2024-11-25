<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @method static inRandomOrder()
 * @method static whereNotIn(string $string, array $array)
 * @method static find(mixed $randomId)
 * @method static where(string $string, mixed $senderUuid)
 * @method static whereNot(string $string, $id)
 * @method static select(string $string, \Illuminate\Contracts\Database\Query\Expression $raw)
 */
class User extends Authenticatable
{
	use HasApiTokens, Notifiable;
    use HasFactory;

	protected $fillable = [
		'uuid',
		'referral_code',
		'password',
		'organization_name',
		'president_name',
		'postal_code',
		'address1',
		'address2',
		'address3',
		'address4',
		'phone_number',
		'email',
		'pr',
		'payment_method',
		'thumbnail_path',
	];

	protected $hidden = [
		'password',
	];

	public function items()
	{
		return $this->hasMany(Item::class, 'user_id', 'id');
	}

	public function favorite_users()
	{
		return $this->hasMany(FavoriteUser::class, 'favorite_user_id', 'id');
	}

	public function favorite_by_users()
	{
		return $this->hasMany(FavoriteUser::class, 'favorite_by_user_id', 'id');
	}
}
