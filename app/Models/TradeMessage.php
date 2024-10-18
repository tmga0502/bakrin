<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class TradeMessage extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'tradeId',
		'senderUuid',
		'message',
		'read_at',
	];

	public function sender(): HasOne
	{
		return $this->hasOne(Producer::class, 'uuid', 'senderUuid');
	}
}
