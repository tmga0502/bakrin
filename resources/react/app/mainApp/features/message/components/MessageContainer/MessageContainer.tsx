import React, { ReactNode } from "react";

const MessageContainer: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'flex flex-col h-full max-h-[calc(100vh_-_268px)]'}>
			{children}
		</div>
	);
};

export default MessageContainer;
