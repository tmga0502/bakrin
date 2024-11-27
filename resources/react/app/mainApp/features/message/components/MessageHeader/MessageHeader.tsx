import React from 'react';

const MessageHeader: React.FC<{name: string}> = ({name}) => {
	return (
		<div className={'flex shadow-none gap-6 p-2 bg-default rounded-t-md'}>
			<p className={'text-white'}>{name}</p>
		</div>
	);
};

export default MessageHeader;
