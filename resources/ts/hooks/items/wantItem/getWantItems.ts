import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const getWantItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getWantItems');
    return data;
}

const useGetWantItems = () => {
    const queryClient = useQueryClient();
    return useQuery('wantItems', getWantItems, {
        onError:()=>{
            queryClient.setQueryData('wantItems',{});
        }
    })
}

export {
    useGetWantItems
}
