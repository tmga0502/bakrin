import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Link} from "react-router-dom";

const RequestButton: React.FC = () => {
	return (
		<Link to={''}>
			<MainButton type={'button'} color={'mainGreen'} width={'half'} text={'申請する'}/>
		</Link>
	);
};

export default RequestButton;
