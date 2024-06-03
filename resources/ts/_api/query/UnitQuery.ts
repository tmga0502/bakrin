import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/UnitApi";


const useGetUnits = () => {
    return useQuery(['units'], ()=>api.getUnits())
}

export {
    useGetUnits,
}
