<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemCategory extends Model
{
	use SoftDeletes;

    protected $fillable = [
        'name',
    ];

	public function varieties(): HasMany
	{
		return $this->hasMany(ItemVariety::class, 'categoryId', 'id');
	}
}
