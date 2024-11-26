<?php

namespace App\Http\Controllers;

use App\Models\TalkRoom;
use App\Models\TalkRoomMember;
use App\Models\TalkRoomMessage;
use App\Models\Trade;
use App\Models\TradeMessage;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Illuminate\Support\Str;

class MessageController extends Controller
{
    public function getMessageList(): JsonResponse
	{
		$result = [];
		$user = Auth()->user();
		$talkRooms = TalkRoom::with(['members.user', 'messages'])->whereHas('members', function($q) use ($user) {
			$q->where('user_id', $user->id);
		})->get();
		$count = 0;
		foreach ($talkRooms as $room) {
			$result[$count] = $room;
			//最終メッセージの取得
			$lastMessage = TalkRoomMessage::where('talk_room_id', $room->id)->orderBy('created_at', 'desc')->first();
			$result[$count]['lastMessage'] = isset($lastMessage) ? $lastMessage->message : '';
			$count++;

		}

		return response()->json($result, 200);
	}

	public function getMessages(Request $req): JsonResponse
	{
		$user = Auth()->user();
		$partner = User::where('uuid', $req->partnerUuid)->first();
		//TalkRoomの検索
		$talk_room_query = TalkRoom::with(['members.user', 'messages.user'])->whereHas('members', static function ($query) use ($user) {
			$query->where('user_id', $user->id);
		})->whereHas('members', function ($query) use($partner) {
			$query->where('user_id', $partner->id);
		});

		if($talk_room_query->exists()){
			$talk_room = $talk_room_query->first();
		}else{
			//TalkRoomの作成
			$new_talk_room = new TalkRoom([
				'uuid' => Str::uuid(),
			]);
			$new_talk_room->save();
			$membersArray = [
				[
					'talk_room_id' => $new_talk_room->id,
					'user_id' => $user->id,
				],
				[
					'talk_room_id' => $new_talk_room->id,
					'user_id' => $partner->id,
				],
			];
			$member = new TalkRoomMember();
			$member->insert($membersArray);

			$talk_room = TalkRoom::with(['members.user', 'messages.user'])->find($new_talk_room->id);
		}


		return response()->json($talk_room, 200);
	}

	public function sendMessage(Request $req)
	{
		$user = Auth()->user();
		$partner = User::where('uuid', $req->partnerUuid)->first();
		//TalkRoomの検索
		$talk_room = TalkRoom::with(['members.user', 'messages.user'])->whereHas('members', static function ($query) use ($user) {
			$query->where('user_id', $user->id);
		})->whereHas('members', function ($query) use($partner) {
			$query->where('user_id', $partner->id);
		})->first();

		$insertArray = [
			'talk_room_id' => $talk_room->id,
			'user_id' => $user->id,
			'message' => $req->message,
		];
		$message = new TalkRoomMessage($insertArray);
		$message->save();

		return response()->json($partner->uuid, 200);
	}

	public function sendTradeMessage(Request $req): JsonResponse
	{
		$user_id = Auth()->user()->id;
		$trade = Trade::find($req->tradeId);
		$insertArray = [
			'trade_id' => $req->tradeId,
			'user_id' => $user_id,
			'message' => $req->message,
		];
		$message = new TradeMessage($insertArray);
		$message->save();

		return response()->json($trade->uuid, 200);
	}



	//メッセージルーム検索クエリー
	protected function SearchTalkRoom($myUuid, $partnerUuid)
	{
		return TalkRoom::where(function ($query) use ($partnerUuid, $myUuid) {
			$query->where('producerUuid1', $myUuid)->where('producerUuid2', $partnerUuid);
		})->orWhere(function ($query) use ($partnerUuid, $myUuid) {
			$query->where('producerUuid1', $partnerUuid)->where('producerUuid2', $myUuid);
		});
	}
}
