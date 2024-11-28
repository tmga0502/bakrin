import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@mainElements/button/MainButton/MainButton";

const NewButton: React.FC = () => {
	return (
		<div className={'text-right mb-4'}>
			<Link to={'new'} className={'inline-block'}>
				<MainButton text={'新規登録'} color={'danger'} type={'button'} size={'sm'}/>
			</Link>
		</div>
	);
};

export default NewButton;
