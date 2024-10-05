import React from 'react';
import {ProducersListType} from "./ProducersList.type";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ProducerType} from "@/react/types/ProducerType";
import {ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";
import Section from "@/react/app/mainApp/features/home/components/Section/Section";
import {SectionTitle} from "@/react/app/mainApp/components/elements/title";

const ProducersList: React.FC<ProducersListType> = (props) => {
	const {title, moreLink, data} = props
	return (
		<Section>
			<SectionTitle title={title} moreLink={moreLink}/>
			<GridBox>
				{data?.slice(0, 6).map((item: ProducerType) => (
					<ListProducerPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</Section>
	);
};

export default ProducersList;
