import React from 'react';
import {ItemType} from "@/ts/types/ItemType";
import {Link} from "react-router-dom";

const ProducerPanel = (props:{data: ItemType}) => {
    return (
		<Link to={`/producers/${props.data.producerUuid}`}>
			<div className="p-4 border-2 bg-white flex items-center gap-6">
				<div className="w-[64px] h-[64px]">
					<img src={props.data.producer.imgPath}
						 className="w-full h-full object-cover rounded-full"
						 alt={props.data.producer.organizationName}/>
				</div>
				<div className="">
					<p className="tex-xs mb-2">{props.data.producer.address1 + props.data.producer.address2}</p>
					<p>{props.data.producer.organizationName}</p>
				</div>
			</div>
		</Link>
    );
};

export default ProducerPanel;
