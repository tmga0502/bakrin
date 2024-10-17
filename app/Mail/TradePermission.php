<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TradePermission extends Mailable
{
	use Queueable, SerializesModels;

	protected object $sender;

	public function __construct($sender){
		$this->sender = $sender;
	}


	public function build(): TradePermission
	{
		$from = config('mail.from');
		return $this
			->from($from['address'], $from['name']) // 送信元
			->subject('申請していた交換が承認されました') // メールタイトル
			->view('email.tradePermission')// 平メール本文のテンプレート
			->with(['sender' => $this->sender]);//ビューに渡す変数
	}
}
