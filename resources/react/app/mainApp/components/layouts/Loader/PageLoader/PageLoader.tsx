import React from 'react';
import ReactLoading from "react-loading";
import {Wrapper, Text} from './PageLoader.styles'

const PageLoader = () => {
    return (
		<div css={Wrapper}>
			<div>
				<ReactLoading
					type="spin"
					color="#00BF63"
					height="100px"
					width="100px"
				/>
				<p css={Text}>読込中</p>
			</div>
		</div>
    );
};

export default PageLoader;
