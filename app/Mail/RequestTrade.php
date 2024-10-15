<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RequestTrade extends Mailable
{
	use Queueable, SerializesModels;


	public function __construct(){}


	public function build(): RequestTrade
	{
		$from = config('mail.from');
		return $this
			->from($from['address'], $from['name']) // 送信元
			->subject('Bakrin | 交換の申請が入りました') // メールタイトル
			->text('email.requestTrade')// 平メール本文のテンプレート
			->with([]);//ビューに渡す変数
	}
}
