import axios from "axios";
import {MessageType} from "@/react/types/MessageType";
import {MessageGroupType} from "@/react/types/MessageGroupType";

const getMessageList = async () => {
    const{ data } = await axios.get<MessageGroupType[]>('/api/message/getMessageList');
    return data;
}

const getMessages = async (uuid: string) => {
	const{ data } = await axios.get<MessageType[]>(`/api/message/getMessages?uuid=${uuid}`);
	return data;
}

const sendMessage = async (formData: any) => {
	const{ data } = await axios.post('/api/message/sendMessage', formData);
	return data;
}

const sendTradeMessage = async (formData: any) => {
	const{ data } = await axios.post<string>('/api/message/sendTradeMessage', formData);
	return data;
}


export {
	getMessageList,
	getMessages,
	sendMessage,
	sendTradeMessage,
}
