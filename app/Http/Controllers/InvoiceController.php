<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\TradeMember;
use Carbon\Carbon;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function getInvoice($month)
	{
		$result = [];
		$invoice_month = Carbon::parse($month . '-01')->lastOfMonth();
		$invoice = Invoice::with('details')->where('user_id', Auth()->user()->id )->where('month', $invoice_month->format('Y-m-d'))->first();
		$all_trade_count = 0;
		$discount_count = 0;
		if($invoice != null){
			foreach($invoice->details as $detail){
				$all_trade_count ++;
				if($detail->discount != 0){
					$discount_count ++;
				}
			}
			$result['details'] = $invoice->details;
		}

		//各種計算
		$trade_fee = config('bakrinState.transaction_fee');
		$result['all_trade_count'] = (string)$all_trade_count;
		$result['trade_amount'] = (string)$trade_fee;
		$result['all_trade_amount'] = (string)$trade_fee * $all_trade_count;
		$result['discount_count'] = (string)$discount_count;
		$result['discount_amount'] = (string)$trade_fee;
		$result['all_discount_amount'] = (string)$discount_count * $trade_fee;
		$result['sub_total'] = (string)($trade_fee * $all_trade_count - $discount_count * $trade_fee);
		$result['tax'] = (string)(($trade_fee * $all_trade_count - $discount_count * $trade_fee) * 0.1);
		$result['total'] = (string)(($trade_fee * $all_trade_count - $discount_count * $trade_fee) * 1.1);
		$result['display_month'] = $invoice_month->format('m月度御請求書');

		//内訳作成
		$result['detail'] = [];
		$detail_count = 0;
		if($invoice !== null){
			foreach($invoice->details as $detail){
				$trade_member = TradeMember::with('user')->where('trade_id', $detail->trade_id)->whereNotIn('user_id', [Auth()->user()->id])->first();
				$discount = $detail->discount > 0 ? (string)$detail->discount : '0';
				$amount =(string) $trade_fee - $discount;
				if($detail->discount_reason === 1){
					$reason = '割引チケット';
				}else if($detail->discount_reason === 99){
					$reason = 'アプリ利用無料期間';
				}else{
					$reason = '';
				}

				$result['detail'][$detail_count]['trade_partner_name'] = $trade_member->user->organization_name;
				$result['detail'][$detail_count]['trade_amount'] = (string)$trade_fee;
				$result['detail'][$detail_count]['discount_amount'] = $discount;
				$result['detail'][$detail_count]['amount'] = $amount;
				$result['detail'][$detail_count]['discount_reason'] = $reason;
				$detail_count++;
			}
		}

		return response()->json($result);
	}
}
