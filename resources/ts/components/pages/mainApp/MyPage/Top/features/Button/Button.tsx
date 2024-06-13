import React from 'react';
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import { ButtonType } from './Button.type';

const Button: React.FC<ButtonType> = ({name}) => {
	return (
		<div className="w-full border rounded-md bg-white p-4 flex justify-between items-center mb-4 shadow-md cursor-pointer hover:opacity-80">
			<p className="m-0">{name}</p>
			<FaRegArrowAltCircleRight className="text-xl"/>
		</div>
	);
};

export default Button;
