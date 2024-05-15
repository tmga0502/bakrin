import {useQueryClient} from "react-query";
import {ProducerType} from "@/ts/types/ProducerType";

const useCurrentGetPopularProducers = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ProducerType[]>('popularProducers')
}

export {
    useCurrentGetPopularProducers
};
