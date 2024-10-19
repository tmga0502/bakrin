import React from 'react';
import ReactLoading from "react-loading";
import {Wrapper} from './ContentsLoader.styles'
import {theme} from "@/react/app/mainApp/styles/Theme";

const ContentsLoader = () => {
    return (
		<div css={Wrapper}>
			<div>
				<ReactLoading
					type="bars"
					color={theme.color.mainGreen}
					height="100px"
					width="100px"
				/>
			</div>
		</div>
    );
};

export default ContentsLoader;
