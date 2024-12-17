import React, {ReactNode} from 'react';

type MainCardType = {
	children: ReactNode,
	title?  : string,
}

const MainCard: React.FC<MainCardType> = ({children, title}) => {
	return (
		<div className={'border border-bakGray rounded-md shadow-md'}>
			{title !== undefined && (
				<div className={'bg-bakDark text-white rounded-t-md px-4 py-2'}>{title}</div>
			)}
			<div className={'p-4'}>
				{children}
			</div>
		</div>
	);
};

export default MainCard;
