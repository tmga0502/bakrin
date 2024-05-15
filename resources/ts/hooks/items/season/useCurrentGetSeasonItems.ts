import {useQueryClient} from "react-query";
import {ItemType} from "@/ts/types/ItemType";

const useCurrentGetSeasonItems = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<ItemType[]>('seasonItems')
}

export {
    useCurrentGetSeasonItems
};
