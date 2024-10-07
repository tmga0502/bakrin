import React from 'react';
import {LogoutButtonType} from "./LogoutButton.type";
import {LogoutButtonStyle} from "./LogoutButton.styles";
import {useLogout} from "@/react/api/query/AuthProducerQuery";
import ButtonPanel from "@/react/app/mainApp/features/myPage/myPage-top/components/ButtonPanel/ButtonPanel";

const LogoutButton: React.FC<LogoutButtonType> = ({}) => {
	const logout = useLogout()
	const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		logout.mutate()
	}

	return (
		<form onSubmit={handleLogout}>
			<button type={'submit'} css={LogoutButtonStyle}>
				<ButtonPanel name={'ログアウト'}/>
			</button>
		</form>
	);
};

export default LogoutButton;
