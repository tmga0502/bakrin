import React from 'react';

const MainTitle: React.FC<{title: string}> = ({title}) => {
	return (
		<div className={'text-xl px-4 py-2 border-b border-b-bakGray mb-6'}>
			{title}
		</div>
	);
};

export default MainTitle;
