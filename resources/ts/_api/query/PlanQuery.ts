import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/PlanApi";


const useGetPlans = () => {
    return useQuery(['plans'], ()=>api.getPlans())
}

export {
    useGetPlans,
}
