<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static inRandomOrder()
 * @method static where(string $string, int $categoryId)
 */
class ItemVariety extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'item_category_id',
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
