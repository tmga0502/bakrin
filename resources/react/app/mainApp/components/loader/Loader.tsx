import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => {
    return (
		<div className="flex justify-center items-center h-screen z-100">
			<div>
				<ReactLoading
					type="spin"
					color="#00BF63"
					height="100px"
					width="100px"
					className="mx-auto"
				/>
				<p className="text-center mt-3">読込中</p>
			</div>
		</div>
    );
};

export default Loader;
