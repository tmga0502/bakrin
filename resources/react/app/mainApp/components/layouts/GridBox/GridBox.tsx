import React, { ReactNode } from 'react';

const GridBox: React.FC<{children:ReactNode}> = ({children}) => {
	return (
		<div className={'w-full grid gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'}>
			{children}
		</div>
	);
};

export default GridBox;
