<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemImage extends Model
{
	use SoftDeletes;

    protected $fillable = [
        'itemId',
        'path',
    ];
}
