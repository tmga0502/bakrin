import React from 'react';
import MainButton from "@adminElements/button/MainButton/MainButton";
import {Link} from "react-router-dom";
import {Wrapper} from '@adminFeatures/notice/components/CreateButton/CreateButton.styles'

const CreateButton = () => {
	return (
		<div css={Wrapper}>
			<Link to={'/admin/notice/new'}>
				<MainButton text={'新規作成'} color={'info'} type={'button'} size={'sm'}/>
			</Link>
		</div>
	);
};

export default CreateButton;
