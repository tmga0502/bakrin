import {useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const useCurrentGetNewArrivalItems = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ItemType[]>('newArrivalItems')
}

export {
    useCurrentGetNewArrivalItems
};
