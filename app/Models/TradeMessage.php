<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class TradeMessage extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'trade_id',
		'user_id',
		'message',
		'read_at',
	];

	public function sender(): HasOne
	{
		return $this->hasOne(User::class, 'id', 'user_id');
	}
}
