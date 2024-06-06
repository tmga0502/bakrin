import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/ProducerApi";

const useGetPopularProducers = () => {
    return useQuery('popularProducers', ()=>api.getPopularProducers())
}

const useGetFavoriteProducers = () => {
    return useQuery('favoriteProducers', ()=>api.getFavoriteProducers())
}

const useGetProducer = (producerUuid: any) => {
	return useQuery(['producer', producerUuid], ()=>api.getProducer(producerUuid))
}

export {
    useGetPopularProducers,
    useGetFavoriteProducers,
	useGetProducer,
}
