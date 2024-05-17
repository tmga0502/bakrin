import {authParams} from "@/ts/_api/api/AuthParams";
import axios from "axios";

const changePassword = async (formData: any) => {
    const uri = authParams(`/api/user/changePassword`)
    const{ data } = await axios.post(uri, formData);
    return data;
}



export {
    changePassword,
}
