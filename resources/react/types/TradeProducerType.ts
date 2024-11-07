import {ItemType} from "@/react/types/ItemType";
import {UserType} from "@/react/types/UserType";

export type TradeProducerType = {
    id                    : number,
	tradeUuid             : string,
    type                  : string,
    producerUuid          : string,
    itemUuid              : string,
	shippingDate          : string,
	shippingSlipPath      : string,
	tel                   : string,
	postalCode            : string,
	address1              : string,
	address2              : string,
	address3              : string,
	address               : string,
    receiptCheck          : boolean,
	item                  : ItemType,
	producer              : UserType,
}
