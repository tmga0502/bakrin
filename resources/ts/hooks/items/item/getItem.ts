import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const getItem = async (itemId:string) => {
    const{ data } = await axios.get<ItemType>(`/api/items/getItem/${itemId}`);
    return data;
}

const useGetItem = (itemId: any) => {
    const queryClient = useQueryClient();
    return useQuery(['item', itemId], ()=>getItem(itemId), {
        onError:()=>{
            queryClient.setQueryData(['item', itemId],{});
        }
    })
}

export {
    useGetItem
}
