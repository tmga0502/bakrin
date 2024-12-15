<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @method static where(string $string, string $code)
 * @method static inRandomOrder()
 */
class Agent extends Authenticatable
{
    use HasFactory;
	use HasApiTokens, Notifiable;

	protected $fillable = [
		'uuid',
		'referral_code',
		'name',
		'password',
		'status',
		'phone_number',
		'email',
		'postal_code',
		'address1',
		'address2',
		'address3',
		'address4',
		'bank_name',
		'bank_name_type',
		'bank_code',
		'branch_name',
		'branch_name_type',
		'branch_code',
		'bank_type',
		'bank_number',
		'bank_account',
	];
}
