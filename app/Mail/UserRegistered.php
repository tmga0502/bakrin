<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegistered extends Mailable
{
	use Queueable, SerializesModels;


	public function __construct(){}


	public function build(): UserRegistered
	{
		$from = config('mail.from');
		return $this
			->from($from['address'], $from['name']) // 送信元
			->subject('Bakrin | 登録ありがとうございます') // メールタイトル
			->text('email.userRegistered')// 平メール本文のテンプレート
			->with([]);//ビューに渡す変数
	}
}
