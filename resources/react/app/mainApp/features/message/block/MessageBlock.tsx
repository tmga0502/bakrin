import React, {forwardRef} from 'react';
import {MessageBlockTv} from "@/react/app/mainApp/features/message/block/MessageBlock.tv";

type MessageBlockType = {
	imgPath: string,
	name: string,
	text: string,
	layout: 'sender' | 'receiver',
}

const MessageBlock = forwardRef<HTMLDivElement | null, MessageBlockType>((props, ref) => {
	const {imgPath, name, text, layout} = props;
	return (
		<div className={MessageBlockTv({layout: layout})} ref={ref}>
			<div className={'flex items-center gap-4 mb-2'}>
				<div className={'w-10 h-10 bg-white rounded-full'}>
					<img src={imgPath} className={'w-full h-full object-cover rounded-full'} alt={name}/>
				</div>
				<p className={'w-[calc(100%-40px)] truncate'}>{name}</p>
			</div>
			<p className={'leading-8'}>{text}</p>
		</div>
	);
});

export default MessageBlock;
