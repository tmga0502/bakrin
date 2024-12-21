import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";

const InvoiceDownload = () => {
	return (
		<div className={'text-right mt-8'}>
			<MainButton text={'ダウンロード'} color={'default'} align={'right'} type={'button'}/>
		</div>
	);
};

export default InvoiceDownload;
