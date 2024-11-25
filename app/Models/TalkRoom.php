<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TalkRoom extends Model
{
    use HasFactory;

	protected $fillable = [
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
