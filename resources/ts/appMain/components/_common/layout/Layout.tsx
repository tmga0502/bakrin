import React from 'react';
import {LayoutProps} from "@/ts/appMain/components/_common/layout/Type";
import Header from "@/ts/appMain/components/_common/header/Header";
import {Container, MainBox, Wrapper} from "@/ts/appMain/components/_ui/box/Box";
import Sidebar from "@/ts/appMain/components/_common/sidebar/Sidebar";
import Footer from "@/ts/appMain/components/_common/footer/Footer";

const MainLayout = (props:LayoutProps) => {
    return (
        <>
            <Wrapper>
                <Header/>
                <Container>
                    <Sidebar/>
                    <MainBox>
                        {props.children}
                    </MainBox>
                </Container>
                <Footer/>
            </Wrapper>
        </>
    );
};

export {
    MainLayout,
};
