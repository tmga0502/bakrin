<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Random\RandomException;


/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
	protected $model = User::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 * @throws RandomException
	 */
	public function definition()
	{
		$prefecturesArray = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
			"茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
			"新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
			"静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
			"奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
			"徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
			"熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];
		$address4Array = [$this->faker->secondaryAddress, ''];
		$now = $this->faker->dateTimeBetween('-3 month', '-1 day');
		$imgRandomInt = random_int(1, 4000);
		$referral_code = 'u' . Str::random(5);//seederでは重複は考慮しない
		return [
			'uuid'             => (string)Str::uuid(),
			'referral_code'    => $referral_code,
			'introducer_code'  => 'NYalmcode0312',
			'status'           => 1,
			'password'         => Hash::make('a12345'),
			'organization_name'=> $this->faker->company,
			'president_name'   => $this->faker->name,
			'postal_code'      => $this->faker->postcode,
			'address1'         => $prefecturesArray[array_rand($prefecturesArray)],
			'address2'         => $this->faker->city,
			'address3'         => $this->faker->streetName,
			'address4'         => $address4Array[array_rand($address4Array)],
			'phone_number'     => $this->faker->phoneNumber,
			'email'            => $this->faker->safeEmail,
			'pr'               => $this->faker->realText,
			'payment_method'   => random_int(0, 1),
			'thumbnail_path'   => 'https://picsum.photos/200/300/?random=' . $imgRandomInt,
			'created_at'       => $now,
			'updated_at'       => $now,
		];
	}
}
