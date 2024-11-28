import React from 'react';
import {useLogout} from "@/react/api/query/AuthUserQuery";
import MyPageCardText from "@mainFeatures/myPage/components/Card/MyPageCardText";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import MyPageCardContainer from "@mainFeatures/myPage/components/Card/MyPageCardContainer";

const LogoutButton: React.FC = () => {
	const logout = useLogout()
	const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		logout.mutate()
	}

	return (
		<form onSubmit={handleLogout} className={'block w-full'}>
			<button type={'submit'} className={'block w-full hover:text-mainGreen'}>
				<MyPageCardContainer>
					<MyPageCardText title={'ログアウト'}/>
					<FaRegArrowAltCircleRight className={'text-xl'}/>
				</MyPageCardContainer>
			</button>
		</form>
	);
};

export default LogoutButton;
