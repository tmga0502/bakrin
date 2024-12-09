<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TradeRejected extends Mailable
{
	use Queueable, SerializesModels;

	protected object $applicant_user;
	protected object $recipient_user;
	protected object $trade;

	public function __construct($applicant_user, $recipient_user, $trade){
		$this->applicant_user = $applicant_user;
		$this->recipient_user = $recipient_user;
		$this->trade = $trade;
	}


	public function build(): TradeRejected
	{
		$from = config('mail.from');
		return $this
			->from($from['address'], $from['name']) // 送信元
			->subject('申請していた交換が拒否されました') // メールタイトル
			->view('email.tradeRejected')// 平メール本文のテンプレート
			->with([
				'user' => $this->user,
				'reason' => $this->trade->reason,
			]);//ビューに渡す変数
	}
}
