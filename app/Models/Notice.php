<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static find(mixed $id)
 * @method static where(string $string, $uuid)
 */
class Notice extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'uuid',
		'title',
		'body',
	];
}
