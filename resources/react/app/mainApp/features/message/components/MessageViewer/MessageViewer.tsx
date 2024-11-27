import React, {ReactNode} from 'react';

const MessageViewer: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'w-full min-h-[400px] max-h-full flex-1 bg-white border-bakGray overflow-y-scroll p-4'}>
			{children}
		</div>
	);
};

export default MessageViewer;
