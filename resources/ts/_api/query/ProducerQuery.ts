import {useQuery} from "react-query";
import {getPopularProducers} from "@/ts/_api/api/ProducerApi";

const useGetPopularProducers = () => {
    return useQuery('popularProducers', getPopularProducers)
}

export {
    useGetPopularProducers,
}
