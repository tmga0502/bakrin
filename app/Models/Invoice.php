<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, $id)
 */
class Invoice extends Model
{
    use HasFactory;

	protected $fillable = [
		'uuid',
		'user_id',
		'month',
		'payment_check',
		'mail_send_check',
	];
}
