<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static inRandomOrder()
 * @method static whereNotIn(string $string, array $array)
 * @method static find(mixed $randomId)
 * @method static where(string $string, mixed $senderUuid)
 * @method static whereNot(string $string, $id)
 */
class User extends Model
{
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
}
