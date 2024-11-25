<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static inRandomOrder()
 * @method static whereNotIn(string $string, array $array)
 * @method static take(int $int)
 * @method static orderBy(string $string, string $string1)
 * @method static get()
 * @method static whereBetween()
 * @method static where(\Closure $param)
 * @method static find($itemID)
 */
class Item extends Model
{
    use HasFactory;
	use SoftDeletes;

    protected $fillable = [
        'uuid',
        'user_id',
        'item_category_id',
        'item_variety_id',
        'name',
        'count',
        'unit_id',
        'guide_count',
		'guide_unit_id',
        'plan_id',
        'description',
        'shipping_start',
        'shipping_start_part',
        'shipping_end',
		'shipping_end_part',
        'status',
		'thumbnail_path',
    ];

    public function favoriteItems(): HasMany
    {
        return $this->hasMany(FavoriteItem::class, 'item_id', 'id');
    }

    public function wantItems(): BelongsTo
    {
        return $this->belongsTo(WantItem::class, 'item_variety_id', 'item_variety_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ItemCategory::class, 'item_category_id', 'id');
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function variety(): BelongsTo
    {
        return $this->belongsTo(ItemVariety::class, 'item_variety_id', 'id');
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'unit_id', 'id');
    }

    public function guideUnit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'guide_unit_id', 'id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ItemImage::class, 'item_id', 'id');
    }
}
