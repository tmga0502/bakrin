import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import React from "react";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {ShowButtonBoxStyle, ShowButtonFlexStyle} from "@mainFeatures/myItem/styles";
import {AddImageModal, ItemDataDeleteModal, LinkToEditButton, ShowDataTable} from "@mainFeatures/myItem/components";

const MyItemShowPage = () => {
	const params = useParams()
	const {data: ItemData = []} = useGetItem(params.itemUuid)

	return (
	  <MainLayout>
		  <PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
		  <ContainerSm>
			  <ShowDataTable itemData={ItemData}/>
			  <div css={ShowButtonBoxStyle}>
				  <ItemDataDeleteModal/>
				  <div css={ShowButtonFlexStyle}>
					  <AddImageModal/>
					  <LinkToEditButton/>
				  </div>
			  </div>
		  </ContainerSm>
	  </MainLayout>
	);
};

export default MyItemShowPage;
