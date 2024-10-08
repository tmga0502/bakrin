import axios from "axios";
import {PlanType} from "@/react/types/PlanType";

const getPlans = async () => {
    const{ data } = await axios.get<PlanType[]>('/api/plans/getPlans');
    return data;
}

export {
    getPlans,
}
