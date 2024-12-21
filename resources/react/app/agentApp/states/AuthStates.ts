import {atom} from "recoil";
import {AgentUserType} from "@/react/types/AgentUserType";

export const IsAgentAuthStates = atom<boolean>({
	key: 'AgentAuthStates',
	default: false,
})

export const IsAgentAuthDataStates = atom<AgentUserType>({
	key: 'IsAgentAuthDataStates',
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
