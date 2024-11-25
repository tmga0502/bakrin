import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {ItemDataType} from "@mainFeatures/item/types";

const LinkToSendMessageButton: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/message/${itemData.user.uuid}`}>
			<MainButton type={'button'} width={'half'} color={'mainYellow'} text={'メッセージを送る'}/>
		</Link>
	);
};

export default LinkToSendMessageButton;
