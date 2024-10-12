import React from "react";
import {ItemType} from "@/react/types/ItemType";

export type SearchPlanContextType = {
	searchPlanList: any,
	setSearchPlanList: React.Dispatch<React.SetStateAction<any>>,
	searchItemResults: ItemType[],
	setSearchItemResults: React.Dispatch<React.SetStateAction<any>>,
}
