import React from 'react';
import {ItemType} from "@/react/types/ItemType";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import NewButton from "@/react/app/mainApp/features/myItemList/components/NewButton/NewButton";
import ListItem from "@/react/app/mainApp/features/myItemList/components/ListItem/ListItem";
import ContainerMd from "@/react/app/mainApp/components/layout/container/ContainerMd/ContainerMd";

type IndexType = {
	data: ItemType[]
}

const Index: React.FC<IndexType> = ({data}) => {
	return (
		<div>
			<PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>
			<ContainerMd>
				<NewButton/>

				{data.map(item => (
					<ListItem key={item.id} data={item}/>
				))}
			</ContainerMd>
		</div>
	);
};

export default Index;
