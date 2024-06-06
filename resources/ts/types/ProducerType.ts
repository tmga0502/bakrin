import {ItemType} from "@/ts/types/ItemType";

export type ProducerType = {
    id               : number,
    uuid             : string,
    organizationName: string,
    presidentName   : string,
    postalCode      : string,
    address1         : string,
    address2         : string,
    address3         : string,
    address4         : string,
    tel              : string,
    imgPath          : string,
    email            : string,
    login_id         : string,
    password         : string,
    paymentMethod    : number,
	pr               : string,
	items            : ItemType[],
}
