<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Trade extends Model
{
    use HasFactory;

    protected $fillable = [
		'uuid',
        'status',
        'senderUuid',
        'rejectReason',
    ];

	public function tradeProducers(): HasMany
	{
		return $this->hasMany(TradeProducer::class, 'tradeUuid', 'uuid');
	}
}
