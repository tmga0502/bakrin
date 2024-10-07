import React from 'react';
import {ListType} from "./List.type";
import {GridStyle} from './List.styles';
import {ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";

const List: React.FC<ListType> = ({data}) => {
	return (
		<div css={GridStyle}>
			{data.map((producer) => (
				<ListProducerPanel data={producer} key={producer.id}/>
			))}
		</div>
	);
};

export {
	List
};
