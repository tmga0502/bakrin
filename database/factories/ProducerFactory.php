<?php
namespace Database\Factories;

use App\Models\Producer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Random\RandomException;


/**
 * @extends Factory<Producer>
 */
class ProducerFactory extends Factory
{
    protected $model = Producer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * @throws RandomException
     */
    public function definition()
    {
        $prefecturesArray = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
            "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
            "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
            "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
            "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
            "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
            "熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
        $address4Array = [$this->faker->secondaryAddress, ''];
        $now = $this->faker->dateTimeBetween('-3 month', '-1 day');
        $imgRandomInt = random_int(1, 4000);
        return [
            'uuid' => (string) Str::uuid(),
            'organizationName' => $this->faker->company,
            'presidentName' => $this->faker->name,
            'postalCode' => $this->faker->postcode,
            'address1' => $prefecturesArray[array_rand($prefecturesArray)],
            'address2' => $this->faker->city,
            'address3' => $this->faker->streetName,
            'address4' => $address4Array[array_rand($address4Array)],
            'tel' => $this->faker->phoneNumber,
            'email' => $this->faker->email,
            'imgPath' => 'https://picsum.photos/200/300/?random=' . $imgRandomInt,
            'password' => Hash::make('a12345'),
            'paymentMethod' => random_int(0, 1),
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }
}
