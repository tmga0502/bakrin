import axios from "axios";
import {ItemType} from "@/ts/types/ItemType";
import {authParams} from "@/ts/_api/api/AuthParams";

const params = authParams

const getItem = async (itemId:string) => {
    const uri = authParams(`/api/items/getItem/${itemId}`)
    const{ data } = await axios.get<ItemType>(uri);
    return data;
}

const getFavoriteItems = async () => {
    const uri = authParams('/api/items/getFavoriteItems/')
    const{ data } = await axios.get<ItemType[]>(uri);
    return data;
}

const getNewArrivalItems = async () => {
    const uri = authParams('/api/items/getNewArrival/')
    const{ data } = await axios.get<ItemType[]>(uri);
    return data;
}

const getSeasonItems = async () => {
    const uri = authParams('/api/items/getSeasonItems/')
    const{ data } = await axios.get<ItemType[]>(uri);
    return data;
}

const getWantItems = async () => {
    const uri = authParams('/api/items/getWantItems/')
    const{ data } = await axios.get<ItemType[]>(uri);
    return data;
}


export {
    getItem,
    getFavoriteItems,
    getNewArrivalItems,
    getSeasonItems,
    getWantItems,
}
