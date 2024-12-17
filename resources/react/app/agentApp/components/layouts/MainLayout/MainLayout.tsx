import React, {ReactNode} from 'react';
import Sidebar from "@/react/app/agentApp/components/layouts/Sidebar/Sidebar";
import Hamburger from "@/react/app/agentApp/components/layouts/hamburger/Hamburger";

const MainLayout:React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className={'flex'}>
			<Sidebar/>
			<div className={'w-full p-4'}>
				<Hamburger/>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
