import React from 'react';
import {ListCardType} from "./ListCard.type";
import {CardStyle, ContentsBox, ImageBox, ImageStyle, Message, ProducerName, TextBox} from './ListCard.styles';
import {Link} from "react-router-dom";

const ListCard: React.FC<ListCardType> = ({room}) => {
	return (
		<Link to={`${room.partner.uuid}`} css={CardStyle}>
			<div css={ContentsBox}>
				<div css={ImageBox}>
					<img src={room.partner.imgPath} css={ImageStyle} alt={room.partner.organizationName}/>
				</div>
				<div css={TextBox}>
					<p css={ProducerName}>{room.partner.organizationName}</p>
					<p css={Message}>{room.lastMessage}</p>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
