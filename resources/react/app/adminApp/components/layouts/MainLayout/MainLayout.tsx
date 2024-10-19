import React, {ReactNode} from 'react';
import Sidebar from "@adminLayouts/Sidebar/Sidebar";
import {Wrapper, Contents} from "@adminLayouts/MainLayout/MainLayout.styles";

const MainLayout:React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div css={Wrapper}>
			<Sidebar/>
			<div css={Contents}>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
