import {ItemType} from "@/react/types/ItemType";
import { ShippingInfoType } from "./ShippingInfoType";

export type UserType = {
    id                         :number,
    uuid                       :string,
    referral_code              :string,
    organization_name          :string,
    president_name             :string,
    postal_code                :string,
    address1                   :string,
    address2                   :string,
    address3                   :string,
    address4                   :string,
    phone_number               :string,
    email                      :string,
	pr                         :string,
    payment_method             :number,
    thumbnail_path             :string,
    login_id                   :string,
    password                   :string,
	have_discount_ticket_count :number,
	items                      :ItemType[],
	favorite_users             :UserType[],
	shipping_info      　　　　　:ShippingInfoType[],
}
