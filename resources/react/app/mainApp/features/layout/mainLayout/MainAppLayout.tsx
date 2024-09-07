import React, {FC, Suspense} from 'react';
import Loader from "@/react/app/mainApp/features/loader/Loader";
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
					<Suspense fallback={<Loader/>}>
						<Breadcrumb/>
						{children}
					</Suspense>
				</MainBox>
			</Container>
			<Footer/>
		</Wrapper>
	);
};

export default MainAppLayout;
