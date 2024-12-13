import {atom} from "recoil";
import {AgentUserType} from "@/react/types/AgentUserType";

export const IsAuthStates = atom<boolean>({
	key: 'AuthStates',
	default: false,
})

export const IsAuthDataStates = atom<AgentUserType>({
	key: 'IsAuthDataStates',
	default:  {
		id                 :0,
		uuid               :'',
		referral_code      :'',
		name               :'',
		postal_code        :'',
		address1           :'',
		address2           :'',
		address3           :'',
		address4           :'',
		phone_number       :'',
		email              :'',
		password           :'',
		bank_name          :'',
		bank_name_type	   :'',
		bank_code		   :'',
		branch_name        :'',
		branch_name_type   :'',
		branch_code        :'',
		bank_type          :'',
		bank_number        :'',
		bank_account       :'',
	},
})
