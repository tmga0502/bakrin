import {UserType} from "@/react/types/UserType";
import {TradeType} from "@/react/types/TradeType";

export type TradeMessageType = {
    id                  :number,
	trade_id            :number,
    user_id             :number,
	message             :string,
	trade               :TradeType,
	sender              :UserType,
}
