import React from 'react';
import {ProducerPanelType} from "./ProducerPanel.type";
import {AddressStyle, ImageBox, ImageStyle, Wrapper} from './ProducerPanel.styles';
import {Link} from "react-router-dom";

const ProducerPanel: React.FC<ProducerPanelType> = ({data}) => {
	return (
		<Link to={`/producers/${data.producerUuid}`}>
			<div css={Wrapper}>
				<div css={ImageBox}>
					<img src={data.producer.imgPath}
						 css={ImageStyle}
						 alt={data.producer.organizationName}/>
				</div>
				<div css="">
					<p css={AddressStyle}>{data.producer.address1 + data.producer.address2}</p>
					<p>{data.producer.organizationName}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProducerPanel;
