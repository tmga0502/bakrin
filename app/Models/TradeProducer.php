<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TradeProducer extends Model
{

	protected $fillable = [
		'tradeUuid',
		'type',
		'producerUuid',
		'itemUuid',
		'shippingDate',
		'shippingSlipPath',
		'tel',
		'postalCode',
		'address1',
		'address2',
		'address3',
		'address4',
	];

	public function item(): HasOne
	{
		return $this->hasOne(Item::class, 'uuid', 'itemUuid');
	}

	public function producer(): HasOne
	{
		return $this->hasOne(Producer::class, 'uuid', 'producerUuid');
	}
}
