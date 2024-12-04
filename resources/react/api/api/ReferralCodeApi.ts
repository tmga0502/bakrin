import axios from "axios";

const checkReferralCode = async (referralCode: string) => {
    const{ data } = await axios.get<boolean>(`/api/referral_code/check/${referralCode}`);
    return data;
}

export {
    checkReferralCode,
}
