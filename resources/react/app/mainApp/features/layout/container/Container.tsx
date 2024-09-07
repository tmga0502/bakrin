import React from 'react';
import { ContainerType } from './Container.type';

const Container: React.FC<ContainerType> = ({children}) => {
	return (
		<div className="max-w-[1280px] min-w-[360px] mx-auto flex min-h-[calc(100vh_-_120px)]">
			{children}
		</div>
	);
};

export default Container;
