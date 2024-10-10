import React from 'react';
import {LogoutButtonType} from "./LogoutButton.type";
import {LogoutButtonStyle} from "./LogoutButton.styles";
import {useLogout} from "@/react/api/query/AuthProducerQuery";
import TopListPanel from "@mainFeatures/myPage/components/TopListPanel/TopListPanel";

const LogoutButton: React.FC<LogoutButtonType> = ({}) => {
	const logout = useLogout()
	const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		logout.mutate()
	}

	return (
		<form onSubmit={handleLogout}>
			<button type={'submit'} css={LogoutButtonStyle}>
				<TopListPanel title={'ログアウト'}/>
			</button>
		</form>
	);
};

export default LogoutButton;
