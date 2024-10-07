import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import MyItemShow from "@/react/app/mainApp/features/myItem/myItem-show";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const MyItemShowPage = () => {
	const params = useParams()
	const {data} = useGetItem(params.itemUuid)

	return (
	  <MainLayout>
		  {data !== undefined ? (
			  <MyItemShow data={data}/>
		  ):(
			  <CanNotGetData/>
		  )}

	  </MainLayout>
	);
};

export default MyItemShowPage;
