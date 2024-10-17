import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetAllWantItems} from "@/react/api/query/WantItemQuery";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import WantContents from "@mainFeatures/myPage/contents/WantContents";

const MyPageWantPage = () => {
	const {data: wantItemsData, isLoading: wantItemsLoading} = useGetAllWantItems()
	const {data: categoriesData, isLoading: categoriesLoading} = useGetCategories();

	let contents: ReactNode
	if (wantItemsLoading || categoriesLoading) {
		contents = <ContentsLoader/>
	}else if (!wantItemsData || !categoriesData) {
		contents = <CanNotGetData/>
	}else{
		contents = <WantContents wantItemsData={wantItemsData} categoriesData={categoriesData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default MyPageWantPage;
