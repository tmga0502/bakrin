import axios from "axios";
import {NoticeType} from "@/react/types/NoticeType";

const getNotices = async () => {
    const{ data } = await axios.get<NoticeType[]>('/api/notice/getAll');
    return data;
}

const getNotice = async (uuid: string) => {
	const{ data } = await axios.get<NoticeType>(`/api/notice/getData/${uuid}`);
	return data;
}

const createNotice = async (formData: any) => {
	const{ data } = await axios.post<NoticeType>(`/api/notice/create`, formData);
	return data;
}

const deleteNotice = async (formData: any) => {
	const{ data } = await axios.post<NoticeType>(`/api/notice/delete`, formData);
	return data;
}

export {
	getNotices,
	getNotice,
	createNotice,
	deleteNotice,
}
