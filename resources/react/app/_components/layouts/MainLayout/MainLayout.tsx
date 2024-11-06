import React, {FC} from 'react';
import Breadcrumb from "@/react/app/mainApp/components/layouts/Breadcrumb/Breadcrumb";
import Header from "@/react/app/mainApp/components/layouts/Header/Header";
import Footer from "@/react/app/mainApp/components/layouts/Footer/Footer";
import {MainAppLayoutType} from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout.type";
import {Wrapper, Container,MainBox} from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout.styles";
import Sidebar from "@/react/app/mainApp/components/layouts/Sidebar/Sidebar";

const MainLayout: FC<MainAppLayoutType> = ({children}) => {
	return (
		<div css={Wrapper}>
			<Header/>
			<div css={Container}>
				<Sidebar/>
				<div css={MainBox}>
					<Breadcrumb/>
					{children}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default MainLayout;
