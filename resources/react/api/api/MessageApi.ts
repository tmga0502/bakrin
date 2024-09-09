import axios from "axios";
import {MessageType} from "@/react/types/MessageType";

const getMessageList = async () => {
    const{ data } = await axios.get<MessageType>('/api/message/getMessageList');
    return data;
}



export {
	getMessageList,
}
