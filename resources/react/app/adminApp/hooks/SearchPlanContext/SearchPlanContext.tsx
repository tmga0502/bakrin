import React, { createContext, useState, useContext, ReactNode } from 'react';
import {SearchPlanContextType} from "@/ts/hooks/SearchPlanContext/SearchPlanContext.type";
import {PlanType} from "@/ts/types/PlanType";
import { ItemType } from '@/ts/types/ItemType';

const SearchPlanContext = createContext<SearchPlanContextType>({
	searchPlanList: [],
	setSearchPlanList:　()=>{},
	searchItemResults: [],
	setSearchItemResults: ()=>{}
});

export const useSearchPlan = () => useContext(SearchPlanContext);

export const SearchPlanProvider:React.FC<{ children: ReactNode }> = ({ children}) => {
	const [searchPlanList, setSearchPlanList] = useState<PlanType[]>([]);
	const [searchItemResults, setSearchItemResults] = useState<ItemType[]>([]);

	return (
		<SearchPlanContext.Provider value={{ searchPlanList, setSearchPlanList, searchItemResults, setSearchItemResults }}>
			{children}
		</SearchPlanContext.Provider>
	);
};

export const useSearchPlanContext = (): SearchPlanContextType => useContext(SearchPlanContext);
