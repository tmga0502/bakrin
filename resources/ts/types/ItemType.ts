import {PlanType} from "@/ts/types/PlanType";
import {ItemImageType} from "@/ts/types/ItemImageType";
import {ItemCategoryType} from "@/ts/types/ItemCategoryType";
import {UnitType} from "@/ts/types/UnitType";
import {ProducerType} from "@/ts/types/ProducerType";

export type ItemType = {
    favorite_items   : any;
    some(arg0: (item: any) => boolean): any;
    id               : number,
    uuid             : string,
    producerUuid     : string,
    name             : string,
    categoryId       : number,
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
    unit             : UnitType,
    guide_unit       : UnitType,
    images           : ItemImageType[],
    producer         : ProducerType,
}
