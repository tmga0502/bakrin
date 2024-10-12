import React from 'react';
import {ItemCateGoryPropsType} from "@mainFeatures/search/types";
import {ItemCategorySearchForm} from "@mainFeatures/search/components";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";
import {useRecoilValue} from "recoil";
import {SearchCategoryResultStates} from "@/react/app/mainApp/states/SearchCategoryStates";

const SearchItemCategoryContents:React.FC<ItemCateGoryPropsType> = ({categoryDatas}) => {
	const searchCategoryResultStates = useRecoilValue(SearchCategoryResultStates)
	return (
		<>
			<ItemCategorySearchForm categoryDatas={categoryDatas}/>

			<GridBox>
				{searchCategoryResultStates.map((item: any) => (
					<ItemPanelForList itemData={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default SearchItemCategoryContents;
