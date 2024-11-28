import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetAllWantItems} from "@/react/api/query/WantItemQuery";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import MyPageWantContext from "@mainFeatures/myPage/context/MyPageWantContext";

const MyPageWantPage = () => {
	const {data: wantItemsData, isLoading: wantItemsLoading} = useGetAllWantItems()
	const {data: categoriesData, isLoading: categoriesLoading} = useGetCategories();

	let context: ReactNode
	if (wantItemsLoading || categoriesLoading) {
		context = <ContentsLoader/>
	}else if (!wantItemsData || !categoriesData) {
		context = <CanNotGetData/>
	}else{
		context = <MyPageWantContext wantItemsData={wantItemsData} categoriesData={categoriesData}/>
	}

	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default MyPageWantPage;
