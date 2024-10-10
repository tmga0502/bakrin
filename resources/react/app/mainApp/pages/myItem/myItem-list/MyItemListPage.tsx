import React from "react";
import {useGetMyItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from '@mainElements/title'
import ContainerMd from "@/react/app/mainApp/components/layouts/container/ContainerMd/ContainerMd";
import {ItemType} from "@/react/types/ItemType";
import {NewButton, ListCard} from "@mainFeatures/myItem/components";

const MyItemListPage = () => {
	const { data: myItemData = [] } = useGetMyItems();

	return (
	  <MainLayout>
		  <PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>
		  <ContainerMd>
			  <NewButton/>
			  {myItemData.map((item: ItemType) => (
				  <ListCard key={item.id} itemData={item}/>
			  ))}
		  </ContainerMd>
	  </MainLayout>
	);
};

export default MyItemListPage;
