import React, {FC, Suspense} from 'react';
import Header from "@/ts/components/ui/header/Header";
import Sidebar from "@/ts/components/ui/sidebar/Sidebar";
import Loader from "@/ts/components/ui/loader/Loader";
import Breadcrumb from "@/ts/components/ui/breadcrumb/Breadcrumb/Breadcrumb";
import Footer from "@/ts/components/ui/footer/Footer";
import { MainAppLayoutType } from './MainLayout.type';
import {Container, MainBox, Wrapper} from "@/ts/components/ui/box";

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
