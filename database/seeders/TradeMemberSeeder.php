<?php

namespace Database\Seeders;

use App\Models\Item;
use App\Models\TradeMember;
use App\Models\User;
use App\Models\Trade;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TradeMemberSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
    public function run(): void
    {
		DB::table('trade_members')->truncate();

		$faker = Faker::create();

		$trades = Trade::all();
		foreach($trades as $trade){
			$me = User::inRandomOrder()->first();
			$partner = User::whereNot('id', $me->id)->inRandomOrder()->first();
			$myItem = Item::where('user_id', $me->id)->inRandomOrder()->first();
			$partnerItem = Item::where('user_id', $partner->id)->inRandomOrder()->first();
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
				'trade_id' => $trade->id,
				'applicant_flag' => true,
				'user_id' => $me->id,
				'item_id' => $myItem->id,
				'shipping_slip_path' => $myShippingDate,
				'receipt_check' => $myReceiptCheck,
			];

			$partnerArray = [
				'trade_id' => $trade->id,
				'applicant_flag' => false,
				'user_id' => $partner->id,
				'item_id' => $partnerItem->id,
				'shipping_date' => $partnerShippingDate,
				'shipping_slip_path' => '',
				'receipt_check' => $partnerReceiptCheck,
			];

			$myTrade = new TradeMember($myArray);
			$myTrade->save();

			$partnerTrade = new TradeMember($partnerArray);
			$partnerTrade->save();
		}
    }
}
