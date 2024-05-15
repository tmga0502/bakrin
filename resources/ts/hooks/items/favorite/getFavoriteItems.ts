import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const getFavoriteItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getFavoriteItems');
    return data;
}

const useGetFavoriteItems = () => {
    const queryClient = useQueryClient();
    return useQuery('favoriteItems', getFavoriteItems, {
        onError:()=>{
            queryClient.setQueryData('favoriteItems',{});
        }
    })
}

export {
    useGetFavoriteItems
}
