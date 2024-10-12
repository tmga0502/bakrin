<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    protected $fillable = [
        'uuid',
        'producerUuid',
        'name',
        'categoryId',
        'varietyId',
        'count',
        'unitId',
        'guideCount',
        'guideUnitId',
        'planId',
        'description',
        'shippingStart',
        'shippingStartPart',
        'shippingEnd',
        'shippingEndPart',
        'status',
		'thumbnail',
    ];

    public function favoriteItems(): HasMany
    {
        return $this->hasMany(FavoriteItem::class, 'itemUuid', 'uuid');
    }

    public function wantItems(): BelongsTo
    {
        return $this->belongsTo(WantItem::class, 'varietyId', 'itemVarietyId');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ItemCategory::class, 'categoryId', 'id');
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class, 'planId', 'id');
    }

    public function producer(): BelongsTo
    {
        return $this->belongsTo(Producer::class, 'producerUuid', 'uuid');
    }

    public function variety(): BelongsTo
    {
        return $this->belongsTo(ItemVariety::class, 'varietyId', 'id');
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'unitId', 'id');
    }

    public function guideUnit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'guideUnitId', 'id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ItemImage::class, 'itemId', 'id');
    }
}
