import React from 'react';
import {PermissionButtonType} from "./PermissionButton.type";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const PermissionButton: React.FC<PermissionButtonType> = ({}) => {
	const handleConfirm =() => {
		console.log('確認')
	}

	return (
		<MainButton type={'button'} text={'承認する'} color={'success'} width={'half'} onClick={handleConfirm}/>
	);
};

export default PermissionButton;
