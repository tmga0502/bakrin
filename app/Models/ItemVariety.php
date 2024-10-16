<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static inRandomOrder()
 */
class ItemVariety extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'categoryId',
		'name',
		'hiragana',
		'katakana',
		'kanzi',
	];

	public function category(): BelongsTo
	{
		return $this->belongsTo(ItemCategory::class, 'categoryId', 'id');
	}
}
