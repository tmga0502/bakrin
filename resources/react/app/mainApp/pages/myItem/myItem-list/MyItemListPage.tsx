import React, {ReactNode} from "react";
import {useGetMyItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from '@mainElements/title'
import ContainerMd from "@/react/app/mainApp/components/layouts/container/ContainerMd/ContainerMd";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import MyItemListContents from "@mainFeatures/myItem/contents/MyItemListContents";

const MyItemListPage = () => {
	const { data: myItemData, isLoading } = useGetMyItems();

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if (!myItemData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<MyItemListContents itemDatas={myItemData}/>
	}

	return (
	  <MainLayout>
		  <PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>
		  <ContainerMd>
			  {contents}
		  </ContainerMd>
	  </MainLayout>
	);
};

export default MyItemListPage;
