import React from 'react';
import {LogoutButtonType} from "./LogoutButton.type";
import {LogoutButtonStyle} from "./LogoutButton.css";
import {useLogout} from "@/react/api/query/AuthQuery";
import ButtonPanel from "@/react/app/mainApp/features/myPageTop/components/ButtonPanel/ButtonPanel";

const LogoutButton: React.FC<LogoutButtonType> = ({}) => {
	const logout = useLogout()
	const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		logout.mutate()
	}

	return (
		<form onSubmit={handleLogout}>
			<button type={'submit'} className={LogoutButtonStyle}>
				<ButtonPanel name={'ログアウト'}/>
			</button>
		</form>
	);
};

export default LogoutButton;
