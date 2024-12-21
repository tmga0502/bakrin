<?php

namespace App\Service;

use App\Models\Invoice;
use Carbon\Carbon;
use Illuminate\Support\Str;

class InvoiceService
{
	protected $user;

	public function __construct($user)
	{
		$this->user = $user;
	}

	public function getInvoice()
	{
		$month = Carbon::now()->lastOfMonth()->format('Y-m-d');
		return Invoice::where('user_id', $this->user->id)->where('month', $month)->first();
	}


	public function createInvoice()
	{
		$month = Carbon::now()->lastOfMonth();
		$invoice_data = new Invoice([
			'uuid' => Str::uuid(),
			'user_id' => $this->user->id,
			'month' => $month,
			'payment_check' => false,
			'mail_send_check' => false,
		]);
		$invoice_data->save();
		return $invoice_data;
	}

}
