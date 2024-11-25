import {ItemType} from "@/react/types/ItemType";
import {UserType} from "@/react/types/UserType";
import {TradeType} from "@/react/types/TradeType";

export type TradeMemberType = {
    id                  :number,
	trade_id            :number,
	applicant_flag      :boolean,
    user_id             :number,
    item_id             :number,
	shipping_info_id    :number,
	shipping_date       :string,
	shipping_slip_path  :string,
    receipt_check       :boolean,
	trade               :TradeType,
	item                :ItemType,
	user                :UserType,
}
