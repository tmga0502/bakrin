import React from 'react';
import {MainButtonType} from "./MainButton.type";
import {ButtonStyle} from "./MainButton.css";

const MainButton: React.FC<MainButtonType> = (props) => {
	const {text, color, size, type , width, align, onClick, disabled } = props
	return (
		<button
			type={type}
			className={ButtonStyle({color: color, size: size, width: width, align: align, disabled:disabled})}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MainButton;
