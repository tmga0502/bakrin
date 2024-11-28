import React, {ReactNode} from 'react';

const Table: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<table className={'w-full border-collapse'}>
			{children}
		</table>
	);
};

export default Table;
