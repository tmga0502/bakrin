import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@mainElements/button/MainButton/MainButton";

const LinkToEditButton: React.FC = () => {
	return (
		<Link to={`edit`} className={'block w-full'}>
			<MainButton text={'編集'} width={'full'} color={'success'} type={'button'}/>
		</Link>
	);
};

export default LinkToEditButton;
