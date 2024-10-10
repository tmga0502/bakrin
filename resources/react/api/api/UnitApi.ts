import axios from "axios";
import {UnitType} from "@/react/types/UnitType";

const getUnits = async () => {
    const{ data } = await axios.get<UnitType[]>('/api/units/getUnits');
    return data;
}

export {
    getUnits,
}
