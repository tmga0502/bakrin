import React from 'react';
import {Wrapper, TitleStyle, BodyStyle} from './DataBox.styles';
import {NoticeDataType} from "@adminFeatures/notice/types/type";
import { formatBr } from '@/react/app/adminApp/functions/formatter';

const DataBox: React.FC<NoticeDataType> = ({noticeData}) => {
	return (
		<div css={Wrapper}>
			<div css={TitleStyle}>
				{noticeData.title}
			</div>

			<div css={BodyStyle}>
				{formatBr(noticeData.body)}
			</div>
		</div>
	);
};

export default DataBox;
