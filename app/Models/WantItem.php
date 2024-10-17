<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static where(string $string, $userUuid)
 */
class WantItem extends Model
{
    use HasFactory;
	use SoftDeletes;

	protected $fillable = [
		'myUuid',
		'itemVarietyId',
	];

	public function producer(): HasOne
	{
		return $this->hasOne(Producer::class, 'uuid', 'myUuid');
	}

	public function itemVariety(): HasOne
	{
		return $this->hasOne(ItemVariety::class, 'id', 'itemVarietyId');
	}
}
