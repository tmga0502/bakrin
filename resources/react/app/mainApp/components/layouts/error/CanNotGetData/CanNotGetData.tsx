import React from 'react';
import {MessageBox, Wrapper, IconStyle, MessageStyle, BrStyle} from './CanNotGetData.styles';
import { BiError } from "react-icons/bi";

const CanNotGetData: React.FC = () => {
	return (
		<div css={Wrapper}>
			<div css={MessageBox}>
				<div css={IconStyle}>
					<BiError/>
				</div>
				<p css={MessageStyle}>
					データ取得に<br css={BrStyle}/>失敗しました
				</p>
			</div>
		</div>
	);
};

export default CanNotGetData;
