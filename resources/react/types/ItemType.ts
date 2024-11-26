import {PlanType} from "@/react/types/PlanType";
import {ItemImageType} from "@/react/types/ItemImageType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {UnitType} from "@/react/types/UnitType";
import {UserType} from "@/react/types/UserType";
import {ItemVarietyType} from "@/react/types/ItemVarietyType";

export type ItemType = {
    map(arg0:(item:any) => any):import("react").ReactNode;
    favorite_items   :any;
    some(arg0:(item:any) => boolean):any;
    id                  :number,
    uuid                :string,
    user_id             :string,
    item_category_id    :number,
    item_variety_id     :number,
    name                :string,
    count               :number,
    unit_id             :string,
    guide_count         :number,
    guide_unit_id       :string,
    plan_id             :number,
    description         :string,
    shipping_start      :number,
    shipping_start_part :string,
    shipping_end        :number,
    shipping_end_part   :string,
    status              :number,
    thumbnail_path      :string,
    plan                :PlanType,
    category            :ItemCategoryType,
	variety             :ItemVarietyType,
    unit                :UnitType,
    guide_unit          :UnitType,
    images              :ItemImageType[],
    user                :UserType,
}
