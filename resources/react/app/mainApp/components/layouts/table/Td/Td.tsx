import React, {ReactNode} from 'react';
import {tv} from "tailwind-variants";

type TdType = {
	text   : string | ReactNode,
	heading: boolean,
}

const TdTv = tv({
	base: 'px-2 py-1',
	variants:{
		heading:{
			true : 'w-0 whitespace-nowrap bg-default text-white',
		}
	}
})

const Td: React.FC<TdType> = ({text, heading}) => {
	return (
		<td className={TdTv({heading:heading})}>{text}</td>
	);
};

export default Td;
