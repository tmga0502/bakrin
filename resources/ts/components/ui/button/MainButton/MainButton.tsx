import React from 'react';
import { MainButtonType } from './MainButton.type';
import { MainButtonTv } from './MainButton.tv';

const MainButton: React.FC<MainButtonType> = ({value, color, type, size, width, onClick, disabled }) => {
	return(
		<button type={type} className={MainButtonTv({width: width, size: size, color: color, disable:disabled })} onClick={onClick} disabled={disabled}>
			{value}
		</button>
	)
}
export default MainButton;
