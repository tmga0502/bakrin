<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static find(mixed $tradeMemberId)
 * @method static where(string $string, $trade_id)
 */
class TradeMember extends Model
{
    use HasFactory;

	protected $fillable = [
		'trade_id',
		'applicant_flag',
		'user_id',
		'item_id',
		'shipping_info_id',
		'shipping_date',
		'shipping_slip_path',
		'receipt_check',
		'use_discount_ticket',
	];

	protected $casts = [
		'applicant_flag'      => 'boolean',
		'receipt_check'       => 'boolean',
		'use_discount_ticket' => 'boolean',
	];

	public function trade()
	{
		return $this->belongsTo(Trade::class, 'trade_id', 'id');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'user_id', 'id');
	}

	public function item()
	{
		return $this->belongsTo(Item::class, 'item_id', 'id');
	}

	public function shipping_info()
	{
		return $this->hasOne(ShippingInfo::class, 'id', 'shipping_info_id');
	}
}
