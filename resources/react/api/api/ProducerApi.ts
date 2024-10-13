import axios from "axios";
import {ProducerType} from "@/react/types/ProducerType";

const getPopularProducers = async () => {
    const{ data } = await axios.get<ProducerType[]>('/api/producers/getPopularProducers');
    return data;
}

const getFavoriteProducers = async () => {
    const{ data } = await axios.get<ProducerType[]>('/api/producers/getFavoriteProducers');
    return data;
}

const getProducer = async (producerUuid: string) => {
	const{ data } = await axios.get<ProducerType>(`/api/producers/getProducer/${producerUuid}`);
	return data;
}

const changePassword = async (formData: any) => {
	const{ data } = await axios.post('/api/user/changePassword', formData);
	return data;
}

const producerUpdate = async (formData: any) => {
	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}
	const{ data } = await axios.post('/api/user/update', formData, config);
	return data;
}

export {
    getPopularProducers,
    getFavoriteProducers,
	getProducer,
	changePassword,
	producerUpdate,
}
