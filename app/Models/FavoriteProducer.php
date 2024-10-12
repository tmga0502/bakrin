<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static where(string $string, mixed $itemUuid)
 */
class FavoriteProducer extends Model
{
    use HasFactory;
	use SoftDeletes;

	protected $fillable =[
		'myUuid',
		'producerUuid',
	];
}
