import axios from "axios";
import {ProducerType} from "@/ts/types/ProducerType";
import {authParams} from "@/ts/_api/api/AuthParams";

const params = authParams

const getPopularProducers = async () => {
    const{ data } = await axios.get<ProducerType[]>(`api/producers/getPopularProducers${params}`);
    return data;
}

export {
    getPopularProducers,
}
