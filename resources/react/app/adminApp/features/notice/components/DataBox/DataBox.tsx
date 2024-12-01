import React from 'react';
import {NoticeDataType} from "@adminFeatures/notice/types/type";
import { formatBr } from '@/react/app/adminApp/functions/formatter';

const DataBox: React.FC<NoticeDataType> = ({noticeData}) => {
	return (
		<div className={'mb-6'}>
			<div className={'px-2 py-1 mb-4 border-b border-b-bakGray'}>
				{noticeData.title}
			</div>

			<div className={'p-2'}>
				{formatBr(noticeData.body)}
			</div>
		</div>
	);
};

export default DataBox;
