<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;

	protected $fillable	= [
		'invoice_id',
		'trade_member_id',
		'amount',
		'discount',
		'referral_fee',
	];
}
