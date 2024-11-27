import React from 'react';
import ReactLoading from "react-loading";

const PageLoader = () => {
    return (
		<div className={'fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-[99999] opacity-80 bg-white'}>
			<div>
				<ReactLoading
					type="spin"
					color="#00BF63"
					height="100px"
					width="100px"
				/>
				<p className={'text-center mt-3'}>読込中</p>
			</div>
		</div>
    );
};

export default PageLoader;
