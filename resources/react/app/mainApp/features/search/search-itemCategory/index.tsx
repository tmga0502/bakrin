import React from 'react';
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {useRecoilValue} from "recoil";
import {SearchCategoryResultStates} from "@/react/app/mainApp/states/SearchCategoryStates";
import {SearchItemCategoryType} from "@/react/app/mainApp/features/search/search-itemCategory/types/type";
import ListItemPanel from "../../../components/layout/panel/ListItemPanel/ListItemPanel";
import Form from "@/react/app/mainApp/features/search/search-itemCategory/components/Form/Form";

const Index: React.FC<SearchItemCategoryType> = ({categoryData}) => {
	const searchCategoryResultStates = useRecoilValue(SearchCategoryResultStates)
	
	return (
		<>
			<Form categoryData={categoryData}/>

			<GridBox>
				{searchCategoryResultStates.map((item: any) => (
					<ListItemPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default Index;
