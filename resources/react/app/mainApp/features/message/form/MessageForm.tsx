import React, {useRef} from 'react';
import {MainButton} from "@/react/app/mainApp/components/button";

const MessageForm = () => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const handleInput = () => {
		if (textareaRef.current){
			const textarea = textareaRef.current;
			textarea.style.height = '40px'; // 一度高さをリセット
			textarea.style.height = `${textarea.scrollHeight}px`; // 内容に応じて高さを再設定
		}
	};

	return (
		<div className="flex flex-shrink-0 gap-6 p-2 bg-mainGreen rounded-b-md">
						<textarea ref={textareaRef}
								  onInput={handleInput} className="textAreaStyle leading-5 min-h-6 max-h-52 h-[40px] overflow-y-auto resize-none"></textarea>
			<div className="flex items-end">
				<MainButton value={'送信'} color={'dark'} type={'button'}/>
			</div>
		</div>
	);
};

export default MessageForm;
