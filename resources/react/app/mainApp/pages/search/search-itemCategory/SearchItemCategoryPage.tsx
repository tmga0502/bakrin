import React, {ReactNode} from 'react';
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import SearchItemCategoryContents from "@mainFeatures/search/contents/SearchItemCategoryContents";

const SearchItemCategoryPage = () => {
	const {data: categoryData, isLoading} = useGetCategories();

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if (!categoryData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<SearchItemCategoryContents categoryDatas={categoryData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SearchItemCategoryPage;