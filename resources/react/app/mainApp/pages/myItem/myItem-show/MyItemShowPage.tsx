import {useParams} from "react-router-dom";
import {useGetMyItem} from "@/react/api/query/ItemQuery";
import React, {ReactNode} from "react";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {useRecoilValue} from "recoil";
import {AuthorisedErrorState} from "@/react/app/mainApp/states/ErrorStates";
import MyItemShowContents from "@mainFeatures/myItem/contents/MyItemShowContents";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {AuthorisedError, CanNotGetData} from "@mainLayouts/error";

const MyItemShowPage = () => {
	const params = useParams()
	const {data: ItemData, isLoading} = useGetMyItem(params.itemUuid)
	const authError = useRecoilValue(AuthorisedErrorState)

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if(authError){
		contents = <AuthorisedError/>
	}else if (!ItemData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<MyItemShowContents itemData={ItemData}/>
	}

	return (
	  <MainLayout>
		  <PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
		  <ContainerSm>
			  {contents}
		  </ContainerSm>
	  </MainLayout>
	);
};

export default MyItemShowPage;
