import { ItemType } from "@/react/types/ItemType";
import React from "react";

export type SearchPlanContextType = {
	searchPlanList: any,
	setSearchPlanList: React.Dispatch<React.SetStateAction<any>>,
	searchItemResults: ItemType[],
	setSearchItemResults: React.Dispatch<React.SetStateAction<any>>,
}
