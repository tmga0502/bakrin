import React from 'react';
import Logo from "@/images/logo.png";
import {Link} from "react-router-dom";

const RegisterCompletedContext: React.FC<{data: boolean}> = ({data}) => {
	const title = data ? '本登録完了' : '既に本登録が完了しています'
	return (
		<>
			<div className={'w-[150px] mx-auto mt-12 mb-3'}>
				<img src={Logo} alt="logo" className={'w-full'}/>
			</div>
			<h1 className={'text-center text-2xl mb-12'}>
				本登録完了
			</h1>

			<p className="text-center leading-8">
				{title}<br/><br/>
				以下のページよりログインしてください。
			</p>

			<p className={'text-center mt-4'}>
				<Link to={'/login'} className={'underline'}>
					ログインページへ
				</Link>
			</p>
		</>
	);
};

export default RegisterCompletedContext;
