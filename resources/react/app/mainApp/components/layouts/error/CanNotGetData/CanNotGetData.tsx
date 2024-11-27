import React from 'react';
import { BiError } from "react-icons/bi";

const CanNotGetData: React.FC = () => {
	return (
		<div className={'w-full h-full flex items-center'}>
			<div className={'mx-auto'}>
				<div className={'text-center text-danger text-5xl'}>
					<BiError style={{marginLeft:'auto', marginRight:'auto'}}/>
				</div>
				<p className={'text-danger text-md'}>
					データ取得に<br className={'md:hidden'}/>失敗しました
				</p>
			</div>
		</div>
	);
};

export default CanNotGetData;
