<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static inRandomOrder()
 */
class ItemVariety extends Model
{
    use HasFactory;
	use SoftDeletes;
}
