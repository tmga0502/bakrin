import React from 'react';
import {Wrapper} from './ItemCategorySearchForm.styles';
import SelectBox from "@mainElements/form/SelectBox/SelectBox";
import {useRecoilState, useSetRecoilState} from "recoil";
import {SearchCategoryResultStates, SearchCategoryStates} from "@/react/app/mainApp/states/SearchCategoryStates";
import axios from "axios";
import {ItemType} from "@/react/types/ItemType";
import {ItemCateGoryPropsType} from "@mainFeatures/search/types";

const ItemCategorySearchForm: React.FC<ItemCateGoryPropsType> = ({categoryDatas}) => {
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
			<SelectBox optionObj={categoryDatas} defaultValue={searchCategoryStates} onChange={onSubmit}/>
		</div>
	);
};

export default ItemCategorySearchForm;
