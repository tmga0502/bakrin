<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TalkRoomMessage extends Model
{
    use HasFactory;

	protected $fillable = [
		'talk_room_id',
		'user_id',
		'message',
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
