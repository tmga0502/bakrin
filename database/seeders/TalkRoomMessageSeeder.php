<?php

namespace Database\Seeders;

use App\Models\TalkRoom;
use App\Models\TalkRoomMember;
use App\Models\TalkRoomMessage;
use Carbon\Carbon;
use Database\Factories\TalkRoomMessageFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalkRoomMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('talk_room_messages')->truncate();

		$talkRoom= TalkRoom::with('members')->get();
		foreach ($talkRoom as $room) {
			for($i = 0; $i < 20; $i++) {
				$senderCheck = (bool)random_int(0, 1);
				$members = TalkRoomMember::where('talk_room_id', $room->id)->get();
				$sender = $senderCheck ? $members[0] : $members[1];
				$date = Carbon::now()->subDays(100 - $i);
				$readAt = 100 - $i === 1  ? null : $date;
				TalkRoomMessage::factory()
					->withId($room->id)
					->withUserId($sender->user_id)
					->withDate($date)
//					->withReadAt($readAt)
					->create();
			}
		}
    }
}
