import {useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const useCurrentGetFavoriteItems = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ItemType[]>('favoriteItems')
}

export {
    useCurrentGetFavoriteItems
};
