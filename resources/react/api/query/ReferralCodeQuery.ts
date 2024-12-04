import {useQuery} from "react-query";
import * as api from "@/react/api/api/ReferralCodeApi";


const useCheckReferralCode = (referralCode: string) => {
    return useQuery(['referralCode'], ()=>api.checkReferralCode(referralCode),{
		suspense: true,
	})
}

export {
	useCheckReferralCode,
}
