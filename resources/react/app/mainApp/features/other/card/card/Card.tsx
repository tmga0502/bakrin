import React, {ReactNode} from 'react';

type CardType = {
	children: ReactNode,
}

const Card = ({children}: CardType) => {
	return (
		<div className="flex items-center gap-4 max-w-[800px] min-w-[350px] mx-auto border rounded-md bg-white shadow mb-4 p-4">
			{children}
		</div>
	);
};

export default Card;
