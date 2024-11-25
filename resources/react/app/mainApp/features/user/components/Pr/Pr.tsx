import React from 'react';
import {PrType} from "./Pr.type";
import {Wrapper, Title} from './Pr.styles';

const Pr: React.FC<PrType> = ({data}) => {
	return (
		<>
			<div css={Wrapper}>
				<p css={Title}>自己紹介</p>
				{data.pr}
			</div>
		</>
	);
};

export default Pr;
