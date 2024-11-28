import React from 'react';
import {UserType} from "@/react/types/UserType";

const Pr: React.FC<{data: UserType}> = ({data}) => {
	return (
		<>
			<div className={'mb-8 px-4 py-8 border-b border-b-bakGray'}>
				<p className={'font-bold mb-3'}>自己紹介</p>
				{data.pr}
			</div>
		</>
	);
};

export default Pr;
