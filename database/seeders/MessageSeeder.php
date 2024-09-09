<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\MessageGroup;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('messages')->truncate();

		$messageGroup = MessageGroup::all();
		foreach ($messageGroup as $group) {
			//メッセージを作成するかどうか
			$flag = (bool)random_int(0, 1);
			if ($flag) {
				for($i = 0; $i < 100; $i++) {
					$senderCheck = (bool)random_int(0, 1);
					if($senderCheck){
						$sender = $group->producerUuid1;
						$receiver = $group->producerUuid2;
					}else{
						$sender = $group->producerUuid2;
						$receiver = $group->producerUuid1;
					}
					$date = Carbon::now()->subDays(100 - $i);
					$readAt = 100 - $i === 1  ? null : $date;
					Message::factory()
						->withId($group->id)
						->withSender($sender)
						->withReceiver($receiver)
						->withDate($date)
						->withReadAt($readAt)
						->create();
				}
			}
		}
    }
}
