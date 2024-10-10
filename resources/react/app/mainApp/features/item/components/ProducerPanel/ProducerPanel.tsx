import React from 'react';
import {AddressStyle, ImageBox, ImageStyle, Wrapper} from './ProducerPanel.styles';
import {Link} from "react-router-dom";
import {ItemDataType} from "@mainFeatures/item/types";

const ProducerPanel: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/producers/${itemData.producerUuid}`}>
			<div css={Wrapper}>
				<div css={ImageBox}>
					<img src={itemData.producer.imgPath}
						 css={ImageStyle}
						 alt={itemData.producer.organizationName}/>
				</div>
				<div css="">
					<p css={AddressStyle}>{itemData.producer.address1 + itemData.producer.address2}</p>
					<p>{itemData.producer.organizationName}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProducerPanel;
