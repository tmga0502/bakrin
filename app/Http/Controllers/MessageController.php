<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\MessageRoom;
use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function getMessageList(): JsonResponse
	{
		$result = [];
		$user = Auth()->user();
		$messageLists = MessageRoom::where('producerUuid1', $user->uuid)->orWhere('producerUuid2', $user->uuid)->get();
		$count = 0;
		foreach ($messageLists as $messageList) {
			$result[$count] = $messageList;
			//相手の情報を取得
			$partnerUuid = $messageList->producerUuid1 === $user->uuid ? $messageList->producerUuid2 : $messageList->producerUuid1;
			$partner = Producer::where('uuid', $partnerUuid)->first();
			$result[$count]['partner']= $partner;
			//最終メッセージの取得
			$lastMessage = Message::where('messageRoomId', $messageList->id)->orderBy('created_at', 'desc')->first();
			$result[$count]['lastMessage'] = isset($lastMessage) ? $lastMessage->message : '';

			$count++;
		}

		return response()->json($result, 200);
	}

	public function getMessages(Request $req): JsonResponse
	{
		$myUuid = Auth()->user()->uuid;
		$partnerUuid = $req->query('uuid');
		//MessageRoomの検索
		$messageRoomQuery = $this->SearchMessageRoom($myUuid, $partnerUuid);
		$messageRoomCheck = $messageRoomQuery->exists();
		if($messageRoomCheck){
			$messageRoom = $messageRoomQuery->first();
			$messages = Message::with('sender')
				->where('messageRoomId', $messageRoom->id)
				->where(function($q) use($myUuid, $partnerUuid){
					$q->where('senderUuid', $myUuid)->orWhere('senderUuid', $partnerUuid);
				})
				->orderBy('created_at', 'asc')->get();
		}else{
			$messages = [];
		}

		return response()->json($messages, 200);
	}

	public function sendMessage(Request $req)
	{
		$myUuid = Auth()->user()->uuid;
		$partnerUuid = $req->partnerUuid;
		//MessageRoomの検索
		$messageRoomQuery = $this->SearchMessageRoom($myUuid, $partnerUuid);

		if($messageRoomQuery->exists()){
			$messageRoom = $messageRoomQuery->first();
		}else{
			//MessageRoomの作成
			$messageRoom = new MessageRoom([
				'producerUuid1' => $myUuid,
				'producerUuid2' => $partnerUuid,
			]);
			$messageRoom->save();
		}

		$insertArray = [
			'messageRoomId' => $messageRoom->id,
			'senderUuid' => $myUuid,
			'message' => $req->message,
			'read_at' => null,
		];
		$message = new Message($insertArray);
		$message->save();

		return response()->json($partnerUuid, 200);
	}



	//メッセージルーム検索クエリー
	protected function SearchMessageRoom($myUuid, $partnerUuid)
	{
		return MessageRoom::where(function ($query) use ($partnerUuid, $myUuid) {
			$query->where('producerUuid1', $myUuid)->where('producerUuid2', $partnerUuid);
		})->orWhere(function ($query) use ($partnerUuid, $myUuid) {
			$query->where('producerUuid1', $partnerUuid)->where('producerUuid2', $myUuid);
		});
	}
}
