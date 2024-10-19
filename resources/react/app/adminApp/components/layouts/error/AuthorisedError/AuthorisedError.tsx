import React from 'react';
import {MessageBox, Wrapper, IconStyle, MessageStyle} from './AuthorisedError.styles';
import { BiError } from "react-icons/bi";

const AuthorisedError: React.FC = () => {
	return (
		<div css={Wrapper}>
			<div css={MessageBox}>
				<div css={IconStyle}>
					<BiError/>
				</div>
				<p css={MessageStyle}>
					このページは表示出来ません
				</p>
			</div>
		</div>
	);
};

export default AuthorisedError;
