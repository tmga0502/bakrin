import React, {FC} from 'react';
import Breadcrumb from "@/react/app/mainApp/features/breadcrumb/Breadcrumb/Breadcrumb";
import {Container, MainBox, Wrapper} from "../index";
import {MainAppLayoutType} from "./MainLayout.type";
import {Sidebar} from "@/react/app/mainApp/features/menu/index";
import Header from "@/react/app/mainApp/features/header/Header";
import Footer from "@/react/app/mainApp/features/footer/Footer";

const MainAppLayout: FC<MainAppLayoutType> = ({children}) => {
	return (
		<Wrapper>
			<Header/>
			<Container>
				<Sidebar/>
				<MainBox>
					<Breadcrumb/>
					{children}
				</MainBox>
			</Container>
			<Footer/>
		</Wrapper>
	);
};

export default MainAppLayout;
