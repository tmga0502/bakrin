import React, {useRef} from 'react';
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useSendMessage} from "@/react/api/query/MessageQuery";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const MessageForm: React.FC = () => {
	const params = useParams();
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const {handleSubmit} = useForm()
	const send = useSendMessage()

	const handleInput = () => {
		if (textareaRef.current){
			const textarea = textareaRef.current;
			textarea.style.height = '40px'; // 一度高さをリセット
			textarea.style.height = `${textarea.scrollHeight}px`; // 内容に応じて高さを再設定
		}
	};

	const onSubmit = () => {
		if (textareaRef.current) {
			const message = textareaRef.current.value; // 手動で textarea の値を取得
			const formData = {
				partnerUuid: params.partnerUuid,
				message: message,
			}
			send.mutate(formData)
			textareaRef.current.value = ''
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={'flex shrink-0 gap-6 p-2 bg-default rounded-b-md'}>
				<textarea
					ref={textareaRef}
					className={'messageTextAreaStyle'}
					onChange={handleInput}
				>
				</textarea>
				<div className={'flex items-center whitespace-nowrap'}>
					<MainButton text={'送信'} color={'info'} type={'submit'}/>
				</div>
			</div>
		</form>
	);
};

export default MessageForm;
