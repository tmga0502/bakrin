import React, {ReactNode} from 'react';

const ContainerMd: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'max-w-[800px] mx-auto'}>
			{children}
		</div>
	);
};

export default ContainerMd;
