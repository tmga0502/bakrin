import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";

const PermissionButton: React.FC = () => {
	const handleConfirm =() => {
		console.log('確認')
	}

	return (
		<MainButton type={'button'} text={'承認する'} color={'success'} width={'half'} onClick={handleConfirm}/>
	);
};

export default PermissionButton;
