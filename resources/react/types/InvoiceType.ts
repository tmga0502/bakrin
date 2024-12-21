import { InvoiceDetailType } from "./InvoiceDetailType"

type InvoiceType = {
    id                 : number,
	uuid               : string,
    month              : boolean,
	payment_check      : boolean,
	detail			   : any,
	details	           : InvoiceDetailType[],
	all_trade_count    : string,
	trade_amount       : string,
	all_trade_amount   : string,
	discount_count     : string,
	discount_amount    : string,
	all_discount_amount: string,
	sub_total          : string,
	tax                : string,
	total              : string,
	display_month	  : string,
}

export {
    InvoiceType,
}
