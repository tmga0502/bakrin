import React from 'react';
import ReferralCode from "@/react/app/agentApp/features/home/components/referralCode/ReferralCode";
import UserList from "@/react/app/agentApp/features/home/components/userList/UserList";
import {UserType} from "@/react/types/UserType";

const HomeContext: React.FC<{users: UserType[]}> = ({users}) => {
	return (
		<div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
			<ReferralCode/>
			<UserList users={users}/>
			{/*・出金依頼中の金額*/}
			{/*・当月の売上*/}
			{/*・累計売上*/}
		</div>
	);
};

export default HomeContext;
