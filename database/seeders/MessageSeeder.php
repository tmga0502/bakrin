<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\MessageRoom;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('messages')->truncate();

		$messageRoom = MessageRoom::all();
		foreach ($messageRoom as $room) {
			//メッセージを作成するかどうか
			$flag = (bool)random_int(0, 1);
			if ($flag) {
				for($i = 0; $i < 100; $i++) {
					$senderCheck = (bool)random_int(0, 1);
					$sender = $senderCheck ? $room->producerUuid1 : $room->producerUuid2;
					$date = Carbon::now()->subDays(100 - $i);
					$readAt = 100 - $i === 1  ? null : $date;
					Message::factory()
						->withId($room->id)
						->withSender($sender)
						->withDate($date)
						->withReadAt($readAt)
						->create();
				}
			}
		}
    }
}
