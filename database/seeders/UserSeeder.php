<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();

        User::factory()->count(100)->create();

		$users = User::all();
		foreach($users as $user){
			//紹介者コードの更新
			$isUpdate = random_int(0, 1);
			if($isUpdate === 1 && $user->id !== 1){
				$introducer = User::find($user->id - 1);
				$introducer_code = $introducer->referral_code;
				$user->fill(['introducer_code' => $introducer_code])->save();
			}
		}
    }
}
