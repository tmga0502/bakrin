<?php

namespace Database\Seeders;

use App\Models\Agent;
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
			$isUpdate = random_int(0, 1);//更新するかどうか
			$isAgent = random_int(0, 1);//エージェントかどうか
			if($isUpdate === 1){
				$introducer = User::find($user->id - 1);
				if($user->id !== 1 && $isAgent === 1){
					$introducer_code = $introducer->referral_code;
					$user->fill(['introducer_code' => $introducer_code])->save();
				}else{
					//AgentModelからランダムに1件取得
					$introducer = Agent::inRandomOrder()->first();
					$introducer_code = $introducer->referral_code;
					$user->fill(['introducer_code' => $introducer_code])->save();
				}
			}
		}
    }
}
