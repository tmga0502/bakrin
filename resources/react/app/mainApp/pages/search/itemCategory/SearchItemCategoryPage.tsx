import React from 'react';
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import SearchItemCategory from "@/react/app/mainApp/features/search/search-itemCategory";

const SearchItemCategoryPage = () => {
	const {data: categoryData} = useGetCategories();

	return (
		<MainLayout>
			{categoryData !== undefined ? (
				<SearchItemCategory categoryData={categoryData}/>
			):(
				<CanNotGetData/>
			)}

		</MainLayout>
	);
};

export default SearchItemCategoryPage;
