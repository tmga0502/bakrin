import React, {ReactNode} from 'react';

type MessageViewerType = {
	children: ReactNode,
}

const MessageViewer = ({children}:MessageViewerType) => {
	return (
		<div className="w-full max-h-full flex-1 bg-white border border-gray-200 shadow-md overflow-y-scroll p-4">
			{children}
		</div>
	);
};

export default MessageViewer;
