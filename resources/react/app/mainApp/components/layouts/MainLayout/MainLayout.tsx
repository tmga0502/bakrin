import React, {FC, ReactNode} from 'react';
import Breadcrumb from "@/react/app/mainApp/components/layouts/Breadcrumb/Breadcrumb";
import Header from "@/react/app/mainApp/components/layouts/Header/Header";
import Footer from "@/react/app/mainApp/components/layouts/Footer/Footer";
import Sidebar from "@/react/app/mainApp/components/layouts/Sidebar/Sidebar";

const MainLayout: FC<{children:ReactNode}> = ({children}) => {
	return (
		<div className={'flex-col min-h-screen min-w-[80%]'}>
			<Header/>
			<div className={'max-w-[1280px] min-w-[330px] mx-auto flex min-h-[calc(100vh_-_120px)]'}>
				<Sidebar/>
				<div className={'w-full p-4 mb-24 md:w-[calc(100%_-_200px)]'}>
					<Breadcrumb/>
					{children}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default MainLayout;
