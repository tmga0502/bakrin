import React, {FC, Suspense} from 'react';
import Header from "@/ts/components/ui/header/Header";
import Sidebar from "@/ts/components/ui/sidebar/Sidebar";
import Loader from "@/ts/components/ui/loader/Loader";
import Breadcrumb from "@/ts/components/ui/breadcrumb/Breadcrumb";
import Footer from "@/ts/components/ui/footer/Footer";
import {Container, MainBox, Wrapper } from '../box/Index';
import { MainAppLayoutType } from './_type';
import {ErrorBoundary} from "react-error-boundary";
import Error from "@/ts/components/pages/mainApp/Error/Error";

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
