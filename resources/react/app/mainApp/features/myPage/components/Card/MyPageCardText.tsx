import React from 'react';

const MyPageCardText:React.FC<{title: string}> = ({title}) => {
	return (
		<p className={'m-0'}>
			{title}
		</p>
	);
};

export default MyPageCardText;
