import React from 'react';
import Logo from "@/images/logo.png";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";

const RegisterTemporaryCompletedPage = () => {
	return (
		<ContainerSm>
			<div className={'w-[150px] mx-auto mt-12 mb-3'}>
				<img src={Logo} alt="logo" className={'w-full'} />
			</div>
			<h1 className={'text-center text-2xl mb-12'}>
				仮登録完了
			</h1>

			<p className="text-center leading-8">
				登録ありがとうございます。<br/>
				仮登録が完了しました<br/><br/>
				ご登録いただいたメールアドレス宛にメールを送信しています。<br/>
				そちらに記載のURLより本登録を完了させてください。
			</p>

		</ContainerSm>
	);
};

export default RegisterTemporaryCompletedPage;
