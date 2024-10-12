<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static where(string $string, $uuid)
 */
class MessageRoom extends Model
{
    use HasFactory;
	use SoftDeletes;

	protected $fillable = [
		'producerUuid1',
		'producerUuid2',
	];

	public function messages(): HasMany
	{
		return $this->hasMany(Message::class, 'messageRoomId', 'id');
	}

}
