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

export {
    getPopularProducers,
    getFavoriteProducers,
	getProducer,
}
