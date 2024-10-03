import React from 'react';
import {ItemsListType} from "./ItemsList.type";
import {Style} from './ItemsList.css';
import SectionTitle from "../../../../components/title/SectionTitle/SectionTitle";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ItemType} from "@/react/types/ItemType";
import ListItemPanel from "../../../../components/layout/panel/ListItemPanel/ListItemPanel";
import Section from "@/react/app/mainApp/features/home/components/Section/Section";

const ItemsList: React.FC<ItemsListType> = (props) => {
	const {title, moreLink, data} = props
	return (
		<Section>
			<SectionTitle title={title} moreLink={moreLink}/>
			<GridBox>
				{data?.slice(0, 6).map((item: ItemType) => (
					<ListItemPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</Section>
	);
};

export default ItemsList;
