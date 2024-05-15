import {useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const useCurrentGetWantItems = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ItemType[]>('wantItems')
}

export {
    useCurrentGetWantItems
};
