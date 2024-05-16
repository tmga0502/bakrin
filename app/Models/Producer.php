<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @method static count()
 * @method static inRandomOrder()
 * @method static whereNotIn(string $string, array $array)
 * @method static where(string $string, mixed $auth_token)
 */
class Producer extends Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'uuid',
        'organizationName',
        'presidentName',
        'postalCode',
        'address1',
        'address2',
        'address3',
        'address4',
        'tel',
        'email',
        'password',
        'paymentMethod',
        'loginToken',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];


}
