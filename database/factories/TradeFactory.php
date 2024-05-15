<?php

namespace Database\Factories;

use App\Models\Producer;
use App\Models\Trade;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Trade>
 */
class TradeFactory extends Factory
{
    protected $model = Trade::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $myAccount = Producer::inRandomOrder()->first();
        $myUuid = $myAccount->uuid;
        $producerAccount = Producer::whereNotIn('uuid',[$myUuid])->inRandomOrder()->first();
        $producerUuid = $producerAccount->uuid;

        $status = $this->faker->randomElement(['requested', 'uncompleted', 'completed', 'rejected']);
        $myShippingDate = null;
        $producerShippingDate = null;
        $rejectReason = null;
        switch($status){
            case 'unCompleted':
                $myShippingDate = $this->faker->randomElement([$this->faker->dateTimeBetween('-3 month', '-1 day'), null]);
                if($myShippingDate === null){
                    $producerShippingDate = $this->faker->date('Y_m_d');
                }
                break;
            case 'completed':
                $myShippingDate = $this->faker->dateTimeBetween('-3 month', '-1 day');
                $producerShippingDate = $this->faker->dateTimeBetween('-3 month', '-1 day');
                break;
            case 'rejected':
                $rejectReason = $this->faker->realText(100,5);
                break;
        }
        $now = Carbon::now();
        return [
            'status' => $status,
            'myUuid' => $myUuid,
            'producerUuid' => $producerUuid,
            'myShippingDate' => $myShippingDate,
            'producerShippingDate' => $producerShippingDate,
            'rejectReason' => $rejectReason,
            'created_at'=> $now,
            'updated_at'=> $now,
        ];
    }
}
