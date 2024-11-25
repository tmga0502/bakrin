import {UserType} from "@/react/types/UserType";

export type ShippingInfoType = {
    id            :number,
    user_id       :number,
	postal_code   :string,
	address1      :string,
	address2      :string,
	address3      :string,
	address4      :string,
	phone_number  :string,
	user          :UserType,
}
