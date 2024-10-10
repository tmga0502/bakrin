import React from 'react';
import {ListPanelType} from "./ListPanel.type";
import {DescriptionBox, ImageBox, ImageStyle, ItemName, LinkBox, ProducerName, RequestDate} from './ListPanel.styles';
import {Link} from "react-router-dom";

const ListPanel: React.FC<ListPanelType> = ({link, thumbnail, itemName, producerName, date}) => {
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

export default ListPanel;
