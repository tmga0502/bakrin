<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string)
 */
class Message extends Model
{
    use HasFactory;

    protected $fillable = [
		'messageGroupId',
        'senderUuid',
        'receiverUuid',
		'message',
		'read_at',
    ];
}
