import React from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";

const SearchItemCategory = () => {
	const {data: categoryData} = useGetCategories();

	const onSubmit = (data: any) => {
		console.log(data.target.value)
	}

	if(categoryData === undefined) return <Loader/>

	console.log(categoryData);
	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4'}>
				<select className="selectBoxStyle" onChange={onSubmit}>
					{categoryData.map((option: { id: string | number, name: string }, index: number) => (
						<option value={option.id} key={index}>{option.name}</option>
					))}
				</select>
			</div>
		</MainAppLayout>
	);
};

export default SearchItemCategory;
