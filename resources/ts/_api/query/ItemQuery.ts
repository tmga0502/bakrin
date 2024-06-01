import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/ItemApi";


const useGetItem = (itemUuid: any) => {
    return useQuery(['item', itemUuid], ()=>api.getItem(itemUuid))
}

const useGetMyItems = () => {
    return useQuery(['myItems'], ()=>api.getMyItems())
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
    useGetMyItems,
    useGetFavoriteItems,
    useGetNewArrivalItems,
    useGetSeasonItems,
    useGetWantItems,
}
