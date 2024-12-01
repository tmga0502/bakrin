import React from 'react';
import MainButton from "@adminElements/button/MainButton/MainButton";
import {Link} from "react-router-dom";

const CreateButton = () => {
	return (
		<div className={'flex w-full justify-end mb-6'}>
			<Link to={'/admin/notice/new'}>
				<MainButton text={'新規作成'} color={'default'} type={'button'} size={'sm'}/>
			</Link>
		</div>
	);
};

export default CreateButton;
