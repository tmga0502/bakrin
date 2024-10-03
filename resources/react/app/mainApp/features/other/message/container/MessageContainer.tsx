import React, {ReactNode} from 'react';


type MessageContainerType = {
	children: ReactNode;
}

const MessageContainer = ({children}:MessageContainerType) => {
	return (
		<div className={'flex flex-col h-full max-h-[calc(100vh-268px)]'}>
			{children}
		</div>
	);
};

export default MessageContainer;
