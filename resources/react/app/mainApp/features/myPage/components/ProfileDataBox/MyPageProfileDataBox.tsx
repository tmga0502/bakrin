import React from 'react';

type MyPageProfileDataBoxType = {
	title: string,
	children: React.ReactNode,
}

const MyPageProfileDataBox: React.FC<MyPageProfileDataBoxType> = ({title, children}) => {
	return (
		<div className={'mb-4'}>
			<label className={'flex items-center text-xs font-bold mb-2 before:contents-[""] before:w-2 before:border-t-[14px] before:border-t-mainGreen before:mr-2'}>
				{title}
			</label>
			<span className={'pb-1 pl-4'}>{children}</span>
		</div>
	);
};

export default MyPageProfileDataBox;
