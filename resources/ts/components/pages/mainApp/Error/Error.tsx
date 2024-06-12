import React from 'react';

const ErrorPage = () => {
	return (
		<div className={'w-full text-center mt-16'}>
			<h2 className={'text-xl mb-4'}>エラーが発生しました。</h2>
			<p>ページを更新するか、ブラウザバックにて再度操作を行ってください。</p>
		</div>
	);
};

export default ErrorPage;
