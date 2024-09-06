import React, {FC, Suspense} from 'react';
import Header from "@/react/app/mainApp/components/header/Header";
import Sidebar from "@/react/app/mainApp/components/sidebar/Sidebar";
import Loader from "@/react/app/mainApp/components/loader/Loader";
import Breadcrumb from "@/react/app/mainApp/components/breadcrumb/Breadcrumb/Breadcrumb";
import Footer from "@/react/app/mainApp/components/footer/Footer";
import { MainAppLayoutType } from './MainLayout.type';
import {Container, MainBox, Wrapper} from "@/react/app/mainApp/components/box";

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
