import React from 'react';
import {ItemType} from "@/react/types/ItemType";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import DataTable from "@/react/app/mainApp/features/myItemShow/components/DataTable/DataTable";
import ButtonBox from "@/react/app/mainApp/features/myItemShow/components/ButtonBox/ButtonBox";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";

type IndexType = {
	data: ItemType
}

const Index: React.FC<IndexType> = ({data}) => {
	return (
		<>
			<PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
			<ContainerSm>
				<DataTable data={data}/>
				<ButtonBox/>
			</ContainerSm>
		</>
	);
};

export default Index;
