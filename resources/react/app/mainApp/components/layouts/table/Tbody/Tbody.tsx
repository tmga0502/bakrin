import React, {ReactNode} from 'react';

const Tbody: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<tbody>
			{children}
		</tbody>
	);
};

export default Tbody;
