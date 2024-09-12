<?php

namespace Database\Factories;

use App\Models\Producer;
use App\Models\Trade;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

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
        $producerAccount = Producer::where('id',[1, 2, 3, 4])->inRandomOrder()->first();
        $producerUuid = $producerAccount->uuid;

//        $status = $this->faker->randomElement(['requested', 'uncompleted', 'completed', 'rejected']);
		$status = Arr::random([0, 1, 2, 3]);
//        $myShippingDate = null;
//        $producerShippingDate = null;
        $rejectReason = $status === 3 ? $this->faker->realText(100,5) : null;
//        switch($status){
//            case 0:
//                $myShippingDate = $this->faker->randomElement([$this->faker->dateTimeBetween('-3 month', '-1 day'), null]);
//                if($myShippingDate === null){
//                    $producerShippingDate = $this->faker->date('Y_m_d');
//                }
//                break;
//            case 1:
//                $myShippingDate = $this->faker->dateTimeBetween('-3 month', '-1 day');
//                $producerShippingDate = $this->faker->dateTimeBetween('-3 month', '-1 day');
//                break;
//            case 2:
//                $rejectReason = $this->faker->realText(100,5);
//                break;
//        }
        $now = Carbon::now();
        return [
			'uuid' => (string) Str::uuid(),
            'status' => $status,
            'senderUuid' => $producerUuid,
            'rejectReason' => $rejectReason,
            'created_at'=> $now,
            'updated_at'=> $now,
        ];
    }
}
