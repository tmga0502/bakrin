import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const getSeasonItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getSeasonItems');
    return data;
}

const useGetSeasonItems = () => {
    const queryClient = useQueryClient();
    return useQuery('seasonItems', getSeasonItems, {
        onError:()=>{
            queryClient.setQueryData('seasonItems',{});
        }
    })
}

export {
    useGetSeasonItems
}
