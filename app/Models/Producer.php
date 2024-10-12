<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @method static count()
 * @method static inRandomOrder()
 * @method static whereNotIn(string $string, array $array)
 * @method static where(string $string, mixed $auth_token)
 * @method static find(int $int)
 * @method static whereNot(string $string, $id)
 */
class Producer extends Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;
	use SoftDeletes;

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
        'pr',
		'authToken'
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

    public function favoriteProducers(): HasMany
    {
        return $this->hasMany(FavoriteProducer::class, 'producerUuid', 'uuid');
    }

	public function items(): HasMany
	{
		return $this->hasMany(Item::class, 'producerUuid', 'uuid');
	}

}
