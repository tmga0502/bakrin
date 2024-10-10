import React from 'react';
import {Wrapper} from './ItemCategorySearchForm.styles';
import SelectBox from "@mainElements/form/SelectBox/SelectBox";
import {SearchItemCategoryType} from "@mainFeatures/search/search-itemCategory/types/type";
import {useRecoilState, useSetRecoilState} from "recoil";
import {SearchCategoryResultStates, SearchCategoryStates} from "@/react/app/mainApp/states/SearchCategoryStates";
import axios from "axios";
import {ItemType} from "@/react/types/ItemType";

const ItemCategorySearchForm: React.FC<SearchItemCategoryType> = ({categoryData}) => {
	const [searchCategoryStates, setSearchCategoryStates] = useRecoilState(SearchCategoryStates)
	const setSearchCategoryResultStates = useSetRecoilState(SearchCategoryResultStates)

	const onSubmit = async(data: any) => {
		const categoryId = data.target.value;
		setSearchCategoryStates(categoryId)
		const response = await axios.post<ItemType[]>(`/api/items/searchCategory`, {categoryId: categoryId});
		setSearchCategoryResultStates(response.data)
	}

	return (
		<div css={Wrapper}>
			<SelectBox optionObj={categoryData} defaultValue={searchCategoryStates} onChange={onSubmit}/>
		</div>
	);
};

export default ItemCategorySearchForm;
