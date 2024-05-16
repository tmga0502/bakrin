import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/ItemApi";


const useGetItem = (itemId: any) => {
    return useQuery(['item', itemId], ()=>api.getItem(itemId))
}

const useGetFavoriteItems = () => {
    return useQuery('favoriteItems', api.getFavoriteItems)
}

const useGetNewArrivalItems = () => {
    return useQuery('newArrivalItems', api.getNewArrivalItems)
}

const useGetSeasonItems = () => {
    return useQuery('seasonItems', api.getSeasonItems)
}

const useGetWantItems = () => {
    return useQuery('wantItems', api.getWantItems)
}


export {
    useGetItem,
    useGetFavoriteItems,
    useGetNewArrivalItems,
    useGetSeasonItems,
    useGetWantItems,
}
