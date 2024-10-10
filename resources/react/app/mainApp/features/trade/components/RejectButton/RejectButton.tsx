import React from 'react';
import {RejectButtonType} from "./RejectButton.type";
import MainButton from "@mainElements/button/MainButton/MainButton";

const RejectButton: React.FC<RejectButtonType> = ({}) => {
	const handleConfirm =() => {
		console.log('確認')
	}

	return (
		<MainButton type={'button'} text={'拒否する'} color={'danger'} width={'half'} onClick={handleConfirm}/>
	);
};

export default RejectButton;
