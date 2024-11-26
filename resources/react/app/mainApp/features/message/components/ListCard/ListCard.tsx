import React from 'react';
import {ListCardType} from "./ListCard.type";
import {CardStyle, ContentsBox, ImageBox, ImageStyle, Message, ProducerName, TextBox} from './ListCard.styles';
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const ListCard: React.FC<ListCardType> = ({room}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const partner = room.members.find(member => member.user_id !== authUser.id)
	return (
		<Link to={`${partner?.user.uuid}`} css={CardStyle}>
			<div css={ContentsBox}>
				<div css={ImageBox}>
					<img src={partner?.user.thumbnail_path} css={ImageStyle} alt={partner?.user.organization_name}/>
				</div>
				<div css={TextBox}>
					<p css={ProducerName}>{partner?.user.organization_name}</p>
					<p css={Message}>{room.lastMessage}</p>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
