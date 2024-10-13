<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static find(mixed $imageId)
 */
class ItemImage extends Model
{
    protected $fillable = [
        'itemId',
        'path',
    ];
}
