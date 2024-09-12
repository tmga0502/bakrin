<?php

namespace Database\Seeders;

use App\Models\Item;
use App\Models\Producer;
use App\Models\Trade;
use App\Models\TradeProducer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TradeProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		DB::table('trade_producers')->truncate();

		$faker = Faker::create();

		$trades = Trade::all();
		foreach($trades as $trade){
			$me = Producer::where('uuid', $trade->senderUuid)->first();
			$partner = Producer::whereNot('id', $me->id)->inRandomOrder()->first();
			$myItem = Item::where('producerUuid', $me->uuid)->inRandomOrder()->first();
			$partnerItem = Item::where('producerUuid', $partner->uuid)->inRandomOrder()->first();
			switch($trade->status){
				case 0:
				case 3:
					$myShippingDate = null;
					$partnerShippingDate = null;
					break;
				case 1:
					$myShippingDate = $faker->randomElement([$faker->dateTimeBetween('-3 month', '-1 day')->format('Y-m-d'), null]);
					$partnerShippingDate = $faker->randomElement([$faker->dateTimeBetween('-3 month', '-1 day')->format('Y-m-d'), null]);
					break;
				case 2:
					$myShippingDate = $faker->dateTimeBetween('-3 month', '-1 day')->format('Y-m-d');
					$partnerShippingDate = $faker->dateTimeBetween('-3 month', '-1 day')->format('Y-m-d');
					break;
				default:
					$myShippingDate = null;
					$partnerShippingDate = null;
			}

			$myReceiptCheck = !($partnerShippingDate === null) && (bool)random_int(0, 1);
			$partnerReceiptCheck = !($myShippingDate === null) && (bool)random_int(0, 1);
			$myArray = [
				'tradeUuid' => $trade->uuid,
				'type' => 'sender',
				'producerUuid' => $me->uuid,
				'itemUuid' => $myItem->uuid,
				'shippingDate' => $myShippingDate,
				'tel' => $me->tel,
				'postalCode' => $me->postalCode,
				'address1' => $me->address1,
				'address2' => $me->address2,
				'address3' => $me->address3,
				'address4' => $me->address4,
				'receiptCheck' => $myReceiptCheck,
			];

			$partnerArray = [
				'tradeUuid' => $trade->uuid,
				'type' => 'recipient',
				'producerUuid' => $partner->uuid,
				'itemUuid' => $partnerItem->uuid,
				'shippingDate' => $partnerShippingDate,
				'tel' => $partner->tel,
				'postalCode' => $partner->postalCode,
				'address1' => $partner->address1,
				'address2' => $partner->address2,
				'address3' => $partner->address3,
				'address4' => $partner->address4,
				'receiptCheck' => $partnerReceiptCheck,
			];

			$myTrade = new TradeProducer($myArray);
			$myTrade->save();

			$partnerTrade = new TradeProducer($partnerArray);
			$partnerTrade->save();
		}
    }
}
