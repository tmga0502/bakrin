import React from 'react';
import {PanelType} from "./Panel.type";
import {DescriptionBox, ImageBox, ImageStyle, ItemName, LinkBox, ProducerName, RequestDate} from './Panel.styles';
import {Link} from "react-router-dom";

const Panel: React.FC<PanelType> = ({link, thumbnail, itemName, producerName, date}) => {
	return (
		<Link to={link} css={LinkBox}>
			<div css={ImageBox}>
				<img src={thumbnail} css={ImageStyle} alt={itemName}/>
			</div>
			<div css={DescriptionBox}>
				<p css={ItemName}>{itemName}</p>
				<p css={ProducerName}>{producerName}</p>
				<p css={RequestDate}>申請日：{date}</p>
			</div>
		</Link>
	);
};

export default Panel;
