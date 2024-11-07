import {TradeProducerType} from "@/react/types/TradeProducerType";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";

export type TradeType = {
    id                    : number,
	uuid                  : string,
    status                : number,
    sender_uuid           : string, //自分
    rejected_reason       : string | null, //取引拒否理由
	created_at            : string,
	updated_at            : string,
	trade_producers       : TradeProducerType[],
	messages              : TalkRoomMessageType[],
}
