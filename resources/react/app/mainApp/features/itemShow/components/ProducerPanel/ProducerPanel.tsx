import React from 'react';
import {ProducerPanelType} from "./ProducerPanel.type";
import {AddressStyle, ImageBox, ImageStyle, Wrapper} from './ProducerPanel.css';
import {Link} from "react-router-dom";

const ProducerPanel: React.FC<ProducerPanelType> = ({data}) => {
	return (
		<Link to={`/producers/${data.producerUuid}`}>
			<div className={Wrapper}>
				<div className={ImageBox}>
					<img src={data.producer.imgPath}
						 className={ImageStyle}
						 alt={data.producer.organizationName}/>
				</div>
				<div className="">
					<p className={AddressStyle}>{data.producer.address1 + data.producer.address2}</p>
					<p>{data.producer.organizationName}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProducerPanel;
