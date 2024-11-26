<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, $uuid)
 * @method static whereHas(string $string, \Closure $param)
 * @method static find(mixed $id)
 */
class TalkRoom extends Model
{
    use HasFactory;

	protected $fillable = [
		'uuid',
		'name',
		'is_group',
	];

	public function members()
	{
		return $this->hasMany(TalkRoomMember::class, 'talk_room_id', 'id');
	}

	public function messages()
	{
		return $this->hasMany(TalkRoomMessage::class, 'talk_room_id', 'id');
	}

}
