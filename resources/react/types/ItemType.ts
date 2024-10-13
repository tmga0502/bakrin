import {PlanType} from "@/react/types/PlanType";
import {ItemImageType} from "@/react/types/ItemImageType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {UnitType} from "@/react/types/UnitType";
import {ProducerType} from "@/react/types/ProducerType";
import {VarietyType} from "@/react/types/VarietyType";

export type ItemType = {
    map(arg0: (item: any) => any): import("react").ReactNode;
    favorite_items   : any;
    some(arg0: (item: any) => boolean): any;
    id               : number,
    uuid             : string,
    producerUuid     : string,
    name             : string,
    categoryId       : number,
    varietyId        : number,
    count            : number,
    unitId           : string,
    guideCount       : number,
    guideUnitId      : string,
    planId           : number,
    description      : string,
    shippingStart    : number,
    shippingStartPart: string,
    shippingEnd      : number,
    shippingEndPart  : string,
    status           : number,
    thumbnail        : string,
    plan             : PlanType,
    category         : ItemCategoryType,
	variety          : VarietyType,
    unit             : UnitType,
    guide_unit       : UnitType,
    images           : ItemImageType[],
    producer         : ProducerType,
}
