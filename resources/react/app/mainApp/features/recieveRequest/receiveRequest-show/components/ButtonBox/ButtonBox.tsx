import React from 'react';
import {ButtonBoxType} from "./ButtonBox.type";
import {Wrapper} from './ButtonBox.styles';
import {RejectButton, PermissionButton} from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show/components";

const ButtonBox: React.FC<ButtonBoxType> = ({}) => {
	return (
		<div css={Wrapper}>
			<RejectButton/>
			<PermissionButton/>
		</div>
	);
};

export default ButtonBox;
