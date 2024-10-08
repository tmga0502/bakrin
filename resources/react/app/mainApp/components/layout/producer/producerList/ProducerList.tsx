import React from 'react';
import {ProducerListType} from "./ProducerList.type";
import {GridStyle} from './ProducerList.styles';
import {ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";

const ProducerList: React.FC<ProducerListType> = ({data}) => {
	return (
		<div css={GridStyle}>
			{data.map((producer) => (
				<ListProducerPanel data={producer} key={producer.id}/>
			))}
		</div>
	);
};

export {
	ProducerList
};
