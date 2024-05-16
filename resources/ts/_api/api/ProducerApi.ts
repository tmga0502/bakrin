import axios from "axios";
import {ProducerType} from "@/ts/types/ProducerType";

const getPopularProducers = async () => {
    const{ data } = await axios.get<ProducerType[]>('api/producers/getPopularProducers');
    return data;
}

export {
    getPopularProducers,
}
