<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
    use HasFactory;

	protected $fillable = [
		'referral_code',
		'name',
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
