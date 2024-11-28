import React, { ReactNode } from 'react';

const MyPageCardContainer: React.FC<{children:ReactNode}> = ({children}) => {
	return (
		<div className={'w-full border border-bakGray rounded-md text-bakDark bg-white p-4 flex justify-between items-center mb-4 shadow-md hover:cursor-pointer hover:opacity-80'}>
			{children}
		</div>
	);
};

export default MyPageCardContainer;
