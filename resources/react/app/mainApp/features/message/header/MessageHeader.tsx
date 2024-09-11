import React from 'react';

const MessageHeader = ({name}:any) => {

	return (
		<div className="flex flex-shrink-0 gap-6 p-2 bg-default rounded-t-md">
			<p className={'text-white'}>{name}</p>
		</div>
	);
};

export default MessageHeader;
