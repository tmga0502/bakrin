import React from 'react';
import {CardType} from "@/react/app/mainApp/features/message/message-list/types/type";
import {CardStyle, ContentsBox, ImageBox, ImageStyle, Message, ProducerName, TextBox} from './Card.styles';
import {Link} from "react-router-dom";

const Card: React.FC<CardType> = ({room}) => {
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

export default Card;
