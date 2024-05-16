import axios from "axios";
import {ProducerType} from "@/ts/types/ProducerType";
import {authParams} from "@/ts/_api/api/AuthParams";

const getPopularProducers = async () => {
    const uri = authParams('/api/producers/getPopularProducers')
    const{ data } = await axios.get<ProducerType[]>(uri);
    return data;
}

export {
    getPopularProducers,
}
