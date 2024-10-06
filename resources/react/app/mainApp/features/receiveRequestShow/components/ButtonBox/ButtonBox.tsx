import React from 'react';
import {ButtonBoxType} from "./ButtonBox.type";
import {Wrapper} from './ButtonBox.styles';
import PermissionButton from "@/react/app/mainApp/features/receiveRequestShow/components/PermissionButton/PermissionButton";
import RejectButton from "@/react/app/mainApp/features/receiveRequestShow/components/RejectButton/RejectButton";

const ButtonBox: React.FC<ButtonBoxType> = ({}) => {
	return (
		<div css={Wrapper}>
			<RejectButton/>
			<PermissionButton/>
		</div>
	);
};

export default ButtonBox;
