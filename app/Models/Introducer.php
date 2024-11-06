<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Introducer extends Model
{
    use HasFactory;

	protected $fillable = [
		'user_id',
		'introducer_type',
		'introducer_id',
	];
}
