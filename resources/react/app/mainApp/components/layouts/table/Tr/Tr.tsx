import React, {ReactNode} from 'react';

const Tr: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<tr className={'border border-bakGray'}>
			{children}
		</tr>
	);
};

export default Tr;
