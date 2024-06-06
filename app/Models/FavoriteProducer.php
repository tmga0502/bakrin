<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, mixed $itemUuid)
 */
class FavoriteProducer extends Model
{
    use HasFactory;

	protected $fillable =[
		'myUuid',
		'producerUuid',
	];
}
