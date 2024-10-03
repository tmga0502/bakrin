import React, {FC} from 'react';
import Breadcrumb from "@/react/app/mainApp/components/layout/Breadcrumb/Breadcrumb";
import Header from "@/react/app/mainApp/components/layout/Header/Header";
import Footer from "@/react/app/mainApp/components/layout/Footer/Footer";
import {MainAppLayoutType} from "@/react/app/mainApp/components/layout/MainLayout/MainLayout.type";
import {Wrapper, Container,MainBox} from "@/react/app/mainApp/components/layout/MainLayout/MainLayout.css";
import Sidebar from "@/react/app/mainApp/components/layout/Sidebar/Sidebar";

const MainLayout: FC<MainAppLayoutType> = ({children}) => {
	return (
		<div className={Wrapper}>
			<Header/>
			<div className={Container}>
				<Sidebar/>
				<div className={MainBox}>
					<Breadcrumb/>
					{children}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default MainLayout;