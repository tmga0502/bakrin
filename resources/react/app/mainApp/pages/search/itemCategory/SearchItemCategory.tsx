import React from 'react';
import {GridBox, MainAppLayout} from "@/react/app/mainApp/features/layout";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {SearchCategoryResultStates, SearchCategoryStates} from "@/react/app/mainApp/states/SearchCategoryStates";
import {useRecoilState} from "recoil";
import axios from "axios";
import {ItemType} from "@/react/types/ItemType";
import {ItemPanel} from "@/react/app/mainApp/features/panel";

const SearchItemCategory = () => {
	const {data: categoryData} = useGetCategories();
	const [searchCategoryStates, setSearchCategoryStates] = useRecoilState(SearchCategoryStates)
	const [searchCategoryResultStates, setSearchCategoryResultStates] = useRecoilState(SearchCategoryResultStates)

	const onSubmit = async(data: any) => {
		const categoryId = data.target.value;
		setSearchCategoryStates(categoryId)
		const response = await axios.post<ItemType[]>(`/api/items/searchCategory`, {categoryId: categoryId});
		setSearchCategoryResultStates(response.data)
	}

	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4 mb-8'}>
				<select className="selectBoxStyle" defaultValue={searchCategoryStates} onChange={onSubmit}>
					{categoryData?.map((option: { id: string | number, name: string }, index: number) => (
						<option value={option.id} key={index}>{option.name}</option>
					))}
				</select>
			</div>

			<GridBox>
				{searchCategoryResultStates.map((item: any) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</MainAppLayout>
	);
};

export default SearchItemCategory;
