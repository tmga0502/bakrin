import React from 'react';
import ReactLoading from "react-loading";

const ContentsLoader = () => {
    return (
		<div className={'flex justify-center items-center w-full h-full z-[99999] opacity-50 bg-white'}>
			<div>
				<ReactLoading
					type="bars"
					color="#00BF63"
					height="100px"
					width="100px"
				/>
			</div>
		</div>
    );
};

export default ContentsLoader;
