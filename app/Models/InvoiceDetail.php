<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;

	protected $fillable	= [
		'invoice_id',
		'trade_id',
		'amount',
		'discount',
		'introducer_code',
		'discount_reason',
	];

}
