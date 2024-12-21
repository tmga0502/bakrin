<?php

namespace App\Service;

use App\Models\InvoiceDetail;

class InvoiceDetailService
{
	protected $invoice;
	protected $trade;
	protected $trade_member;

	public function __construct($invoice, $trade, $trade_member)
	{
		$this->invoice = $invoice;
		$this->trade = $trade;
		$this->trade_member = $trade_member;
	}

	public function createInvoiceDetail()
	{
		//configのbakrinStateからapplication_statusの値を取得
		$app_status = config('bakrinState.application_status');
		$amount = config('bakrinState.transaction_fee');
		$discount = 0;
		$discount_reason = 0;
		if($app_status === 'beta'){
			$discount = $amount;
			$discount_reason = 99;
		}elseif ($this->trade_member->use_discount_ticket){
			$discount = $amount;
			$discount_reason = 1;
		}

		$detail = new InvoiceDetail([
			'invoice_id' => $this->invoice->id,
			'trade_id' => $this->trade->id,
			'amount' => $amount,
			'discount' => $discount,
			'introducer_code' => $this->trade_member->user->introducer_code,
			'discount_reason' => $discount_reason,
		]);
		$detail->save();
	}
}
