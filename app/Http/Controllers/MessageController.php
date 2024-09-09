<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\MessageGroup;
use App\Models\Producer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    public function getMessageList(): JsonResponse
	{
		$result = [];
		$user = Auth()->user();
		$messageLists = MessageGroup::where('producerUuid1', $user->uuid)->orWhere('producerUuid2', $user->uuid)->get();
		$count = 0;
		foreach ($messageLists as $messageList) {
			$result[$count] = $messageList;
			//相手の情報を取得
			$partnerUuid = $messageList->producerUuid1 === $user->uuid ? $messageList->producerUuid2 : $messageList->producerUuid1;
			$partner = Producer::where('uuid', $partnerUuid)->first();
			$result[$count]['partner']= $partner;
			//最終メッセージの取得
			$lastMessage = Message::where('messageGroupId', $messageList->id)->orderBy('created_at', 'desc')->first();
			$result[$count]['lastMessage'] = $lastMessage->message;

			$count++;
		}

		return response()->json($result, 200);
	}

	public function getMessages(Request $req): JsonResponse
	{
		$myUuid = Auth()->user()->uuid;
		$partnerUuid = $req->query('uuid');

		$messages = Message::with(['sender', 'receiver'])->where(function($q) use($myUuid, $partnerUuid) {
			$q->where('senderUuid', $myUuid)->where('receiverUuid', $partnerUuid);
		})->orWhere(function($q) use($myUuid, $partnerUuid) {
			$q->where('senderUuid', $partnerUuid)->where('receiverUuid', $myUuid);
		})->orderBy('created_at', 'asc')->get();

		return response()->json($messages, 200);
	}
}
