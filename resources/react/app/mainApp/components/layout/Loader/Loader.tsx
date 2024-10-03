import React from 'react';
import ReactLoading from "react-loading";
import {Wrapper, Text} from './Loader.css'

const Loader = () => {
    return (
		<div className={Wrapper}>
			<div>
				<ReactLoading
					type="spin"
					color="#00BF63"
					height="100px"
					width="100px"
				/>
				<p className={Text}>読込中</p>
			</div>
		</div>
    );
};

export default Loader;
