import React, { ReactNode } from 'react';

const ContainerSm: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'max-w-[500px] mx-auto'}>
			{children}
		</div>
	);
};

export default ContainerSm;
