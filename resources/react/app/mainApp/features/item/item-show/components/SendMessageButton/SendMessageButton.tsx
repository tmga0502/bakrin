import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {ItemDataType} from "@/react/app/mainApp/features/item/item-show/types/type";

const SendMessageButton: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/message/${itemData.producer.uuid}`}>
			<MainButton type={'button'} width={'half'} color={'mainYellow'} text={'メッセージを送る'}/>
		</Link>
	);
};

export default SendMessageButton;
