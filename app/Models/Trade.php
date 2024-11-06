<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static find(mixed $tradeId)
 */
class Trade extends Model
{
    use HasFactory;
	use SoftDeletes;

    protected $fillable = [
		'uuid',
        'status',
        'reject_reason',
    ];

	public function senderProducer(): HasOne
	{
		return $this->hasOne(User::class, 'uuid', 'senderUuid');
	}

	public function tradeMembers(): HasMany
	{
		return $this->hasMany(TradeMember::class, 'tradeUuid', 'uuid');
	}

	public function messages(): HasMany
	{
		return $this->hasMany(TradeMessage::class, 'tradeId', 'id');
	}
}
