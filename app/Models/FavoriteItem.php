<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Item;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static where(string $string, mixed $userUuid)
 */
class FavoriteItem extends Model
{
    use HasFactory;
	use SoftDeletes;

    protected $fillable =[
        'user_id',
        'item_id',
    ];

	public function item(): BelongsTo
	{
		return $this->belongsTo(Item::class, 'itemUuid', 'uuid');
	}
}
