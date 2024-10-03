import React from 'react';
import {SendRequestButtonType} from "./SendRequestButton.type";
import {Link} from "react-router-dom";
import MainButton from "@/react/components/elements/button/MainButton/MainButton";

const SendRequestButton: React.FC<SendRequestButtonType> = ({data}) => {
	return (
		<Link to={`/items/${data.uuid}/requestForm`}>
			<MainButton type={'button'} width={'half'} color={'mainGreen'} text={'申請する'} align={'center'}/>
		</Link>
	);
};

export default SendRequestButton;
