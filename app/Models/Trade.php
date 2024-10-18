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
        'senderUuid',
        'rejectReason',
    ];

	public function senderProducer(): HasOne
	{
		return $this->hasOne(Producer::class, 'uuid', 'senderUuid');
	}

	public function tradeProducers(): HasMany
	{
		return $this->hasMany(TradeProducer::class, 'tradeUuid', 'uuid');
	}

	public function messages(): HasMany
	{
		return $this->hasMany(TradeMessage::class, 'tradeId', 'id');
	}
}
