import React from 'react';
import { BiError } from "react-icons/bi";

const AuthorisedError: React.FC = () => {
	return (
		<div className={'w-full h-full flex items-center'}>
			<div className={'mx-auto'}>
				<div className={'text-center text-danger text-5xl'}>
					<BiError/>
				</div>
				<p className={'text-danger text-md'}>
					このデータは表示出来ません
				</p>
			</div>
		</div>
	);
};

export default AuthorisedError;
