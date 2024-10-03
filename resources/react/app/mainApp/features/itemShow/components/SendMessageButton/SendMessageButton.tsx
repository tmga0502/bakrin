import React from 'react';
import {SendMessageButtonType} from "./SendMessageButton.type";
import {Link} from "react-router-dom";
import MainButton from "@/react/components/elements/button/MainButton/MainButton";

const SendMessageButton: React.FC<SendMessageButtonType> = ({data}) => {
	return (
		<Link to={`/message/${data.producer.uuid}`}>
			<MainButton type={'button'} width={'half'} color={'mainYellow'} text={'メッセージを送る'}/>
		</Link>
	);
};

export default SendMessageButton;
