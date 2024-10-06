import React from "react";
import {useGetMyItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import MyItemList from "@/react/app/mainApp/features/myItemList";

const MyItemListPage = () => {
	const { data: myItemData } = useGetMyItems();

	return (
	  <MainLayout>
		  {myItemData !== undefined ? (
			  <MyItemList data={myItemData}/>
		  ):(
			  <CanNotGetData/>
		  )}
	  </MainLayout>
	);
};

export default MyItemListPage;
