import React from 'react';
import {LinkEditButtonType} from "./LinkEditButton.type";
import {Link} from "react-router-dom";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const LinkEditButton: React.FC<LinkEditButtonType> = () => {
	return (
		<Link to={`edit`} className={'block w-full mb-6'}>
			<MainButton text={'編集'} width={'full'} color={'success'} type={'button'}/>
		</Link>
	);
};

export default LinkEditButton;
