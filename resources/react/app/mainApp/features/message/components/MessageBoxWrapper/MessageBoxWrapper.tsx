import React, {ReactNode} from 'react';

const MessageBoxWrapper: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'max-w-[800px] h-full max-h-full mt-10 mx-auto'}>
			{children}
		</div>
	);
};

export default MessageBoxWrapper;
