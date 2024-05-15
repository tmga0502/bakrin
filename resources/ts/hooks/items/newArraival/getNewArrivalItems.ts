import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const getNewArrivalItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getNewArrival');
    return data;
}

const useGetArrivalItems = () => {
    const queryClient = useQueryClient();
    return useQuery('newArrivalItems', getNewArrivalItems, {
        onError:()=>{
            queryClient.setQueryData('newArrivalItems',{});
        }
    })
}

export {
    useGetArrivalItems
}
