import axios from "axios";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";
import {TalkRoomType} from "@/react/types/TalkRoomType";

const getMessageList = async () => {
    const{ data } = await axios.get<TalkRoomType[]>('/api/message/getMessageList');
    return data;
}

const getMessages = async (uuid: string) => {
	const{ data } = await axios.get<TalkRoomMessageType[]>(`/api/message/getMessages?uuid=${uuid}`);
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
