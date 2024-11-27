import React, {forwardRef} from 'react';
import { tv } from 'tailwind-variants';

type MessageBlockType = {
	imgPath: string,
	name: string,
	text: string,
	layout: 'sender' | 'receiver',
}

const MessageBlockTv = tv({
	base: 'max-w-[75%] p-4 shadow-sm rounded-md mb-8',
	variants:{
		layout:{
			'sender'  : 'ml-auto bg-darkGreen',
			'receiver': 'mr-auto bg-bakGray',
		}
	}
})

const MessageBlock =  forwardRef<HTMLDivElement | null, MessageBlockType>((props, ref) => {
	const {imgPath, name, text, layout} = props;
	return (
		<div className={MessageBlockTv({layout: layout})} ref={ref}>
			<div className={'flex items-center gap-4 mb-2'}>
				<div className={'w-10 h-10 bg-white rounded-full'}>
					<img src={imgPath} className={'w-full h-full object-cover rounded-full'} alt={name}/>
				</div>
				<p className={'w-[calc(100%_-_40px)] whitespace-nowrap overflow-hidden overflow-ellipsis'}>{name}</p>
			</div>

			{text.split('\n').map((line, index) => (
				<p className={'leading-8'} key={index}>
					{line}
					<br/>
				</p>
			))}
		</div>
	);
});

export default MessageBlock;
