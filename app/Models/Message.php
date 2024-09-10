<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Producer;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @method static where(string $string)
 */
class Message extends Model
{
    use HasFactory;

    protected $fillable = [
		'messageRoomId',
        'senderUuid',
		'message',
		'read_at',
    ];

	public function sender(): HasOne
	{
		return $this->hasOne(Producer::class, 'uuid', 'senderUuid');
	}
}
