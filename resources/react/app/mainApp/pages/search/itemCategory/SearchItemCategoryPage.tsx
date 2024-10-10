import React from 'react';
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {ItemCategorySearchForm} from "@mainFeatures/search/components";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";
import {useRecoilValue} from "recoil";
import {SearchCategoryResultStates} from "@/react/app/mainApp/states/SearchCategoryStates";

const SearchItemCategoryPage = () => {
	const {data: categoryData = []} = useGetCategories();
	const searchCategoryResultStates = useRecoilValue(SearchCategoryResultStates)

	return (
		<MainLayout>
			<ItemCategorySearchForm categoryData={categoryData}/>

			<GridBox>
				{searchCategoryResultStates.map((item: any) => (
					<ItemPanelForList itemData={item} key={item.id}/>
				))}
			</GridBox>
		</MainLayout>
	);
};

export default SearchItemCategoryPage;
