import React from 'react';
import {Link} from "react-router-dom";
import { ItemShowProducerPanelType } from './ItemShowProducerPanel.type';

const ItemShowProducerPanel: React.FC<ItemShowProducerPanelType> = ({data}) => {
	return (
		<Link to={`/producers/${data.producerUuid}`}>
			<div className="p-4 border-2 bg-white flex items-center gap-6">
				<div className="w-[64px] h-[64px]">
					<img src={data.producer.imgPath}
						 className="w-full h-full object-cover rounded-full"
						 alt={data.producer.organizationName}/>
				</div>
				<div className="">
					<p className="tex-xs mb-2">{data.producer.address1 + data.producer.address2}</p>
					<p>{data.producer.organizationName}</p>
				</div>
			</div>
		</Link>
	);
};

export default ItemShowProducerPanel;
