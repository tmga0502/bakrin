<?php

namespace Database\Seeders;

use App\Models\TalkRoom;
use App\Models\TalkRoomMember;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalkRoomMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		DB::table('talk_room_members')->truncate();

		$talkRooms = TalkRoom::all();
		foreach ($talkRooms as $room) {
			//自分を含めるかどうか
			$frag = random_int(0,1);
			$member = new TalkRoomMember();
			if($frag === 1){
				$user = User::whereNotIn('id', [1])->inRandomOrder()->first();
				$member->create([
					'talk_room_id' => $room->id,
					'user_id' => 1,
				]);
				$member->create([
					'talk_room_id' => $room->id,
					'user_id' => $user->id,
				]);
			}else{
				$user1 = User::inRandomOrder()->first();
				$user2 = User::whereNotIn('id', [$user1->id])->inRandomOrder()->first();
				$member->create([
					'talk_room_id' => $room->id,
					'user_id' => $user1->id,
				]);
				$member->create([
					'talk_room_id' => $room->id,
					'user_id' => $user2->id,
				]);
			}
		}
    }
}
