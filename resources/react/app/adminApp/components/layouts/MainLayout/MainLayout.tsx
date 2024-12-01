import React, {ReactNode} from 'react';
import Sidebar from "@adminLayouts/Sidebar/Sidebar";

const MainLayout:React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'flex'}>
			<Sidebar/>
			<div className={'w-full p-4'}>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
