import {useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const useCurrentGetItem = (itemId: any) => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ItemType>(['item', itemId])
}

export {
    useCurrentGetItem
};
