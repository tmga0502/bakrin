import {useQuery} from "react-query";
import * as api from "@/react/api/api/ProducerApi";

const useGetPopularProducers = () => {
    return useQuery('popularProducers', ()=>api.getPopularProducers(),{
		suspense: true,
	})
}

const useGetFavoriteProducers = () => {
    return useQuery('favoriteProducers', ()=>api.getFavoriteProducers(),{
		suspense: true,
	})
}

const useGetProducer = (producerUuid: any) => {
	return useQuery(['producer', producerUuid], ()=>api.getProducer(producerUuid),{
		suspense: true,
	})
}

export {
    useGetPopularProducers,
    useGetFavoriteProducers,
	useGetProducer,
}
