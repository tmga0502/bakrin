import React from 'react';
import {MainButtonType} from "./MainButton.type";
import {ButtonStyle} from "./MainButton.styles";

const MainButton: React.FC<MainButtonType> = (props) => {
	console.log(props)
	const {text, color = 'mainGreen', size = 'md', type , width = '' , align = 'center', onClick, disabled = false } = props
	return (
		<button
			type={type}
			css={ButtonStyle({color:color, size:size, width:width, align:align, disabled:disabled})}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MainButton;
