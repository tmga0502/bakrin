<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method create(array $array)
 * @method static where(string $string, mixed $id)
 * @method insert(array[] $membersArray)
 */
class TalkRoomMember extends Model
{
    use HasFactory;

	protected $fillable = [
		'talk_room_id',
		'user_id',
	];

	public function talkRoom()
	{
		return $this->belongsTo(TalkRoom::class, 'talk_room_id', 'id');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'user_id', 'id');
	}
}
