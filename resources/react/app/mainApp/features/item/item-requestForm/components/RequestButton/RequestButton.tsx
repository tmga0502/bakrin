import React from 'react';
import {RequestButtonType} from "./RequestButton.type";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {Link} from "react-router-dom";

const RequestButton: React.FC<RequestButtonType> = ({}) => {
	return (
		<Link to={''}>
			<MainButton type={'button'} color={'mainGreen'} width={'half'} text={'申請する'}/>
		</Link>
	);
};

export default RequestButton;
