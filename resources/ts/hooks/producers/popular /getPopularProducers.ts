import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ProducerType} from "@/ts/types/ProducerType";

const getPopularProducers = async () => {
    const{ data } = await axios.get<ProducerType[]>('api/producers/getPopularProducers');
    return data;
}

const useGetPopularProducers = () => {
    const queryClient = useQueryClient();
    return useQuery('popularProducers', getPopularProducers, {
        onError:()=>{
            queryClient.setQueryData('popularProducers',{});
        }
    })
}

export {
    useGetPopularProducers
}
