import {useQuery} from "react-query";
import {getFavoriteProducers, getPopularProducers} from "@/ts/_api/api/ProducerApi";

const useGetPopularProducers = () => {
    return useQuery('popularProducers', getPopularProducers)
}

const useGetFavoriteProducers = () => {
    return useQuery('favoriteProducers', getFavoriteProducers)
}

export {
    useGetPopularProducers,
    useGetFavoriteProducers,
}
