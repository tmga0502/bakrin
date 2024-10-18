import React, {useRef} from 'react';
import {TradeMessageFormType} from "./TradeMessageForm.type";
import {ButtonWrapper, TextAreaStyle, Wrapper} from './TradeMessageForm.styles';
import {useForm} from "react-hook-form";
import {useTradeMessage} from "@/react/api/query/MessageQuery";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const TradeMessageForm: React.FC<TradeMessageFormType> = ({tradeId}) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const {handleSubmit} = useForm()
	const send = useTradeMessage()

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
				tradeId: tradeId,
				message: message,
			}
			send.mutate(formData)
			textareaRef.current.value = ''
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div css={Wrapper}>
				<textarea
					ref={textareaRef}
					css={TextAreaStyle}
					onChange={handleInput}
				>
				</textarea>
				<div css={ButtonWrapper}>
					<MainButton text={'送信'} color={'info'} type={'submit'}/>
				</div>
			</div>
		</form>
	);
};

export default TradeMessageForm;
