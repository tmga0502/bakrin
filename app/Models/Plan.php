<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plan extends Model
{
	use SoftDeletes;

    protected $fillable = [
      	'name',
		'display_name',
		'badge_color',
		'badge_text_color',
    ];
}
