import axios from "axios";
import {PlanType} from "@/ts/types/PlanType";

const getPlans = async () => {
    const{ data } = await axios.get<PlanType>('/api/plans/getPlans');
    return data;
}

export {
    getPlans,
}
