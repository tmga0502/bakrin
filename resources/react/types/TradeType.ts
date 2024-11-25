import {TradeMemberType} from "@/react/types/TradeMemberType";
import {TradeMessageType} from "@/react/types/TradeMessageType";

export type TradeType = {
    id                    : number,
	uuid                  : string,
    status                : number,
    rejected_reason       : string | null, //取引拒否理由
	created_at            : string,
	updated_at            : string,
	tradeMembers          : TradeMemberType[],
	messages              : TradeMessageType[],
}
