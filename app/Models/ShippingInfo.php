<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingInfo extends Model
{
    use HasFactory;

	protected $fillable = [
		'user_id',
		'postal_code',
		'address1',
		'address2',
		'address3',
		'address4',
		'phone_number',
	];
}
