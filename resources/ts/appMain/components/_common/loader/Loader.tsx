import React from 'react';
import ReactLoading from "react-loading";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";

const Loader = () => {
    return (
        // <MainLayout>
            <div className="flex justify-center items-center h-screen z-100">
                <div>
                    <ReactLoading
                        type="spin"
                        color="#00BF63"
                        height="100px"
                        width="100px"
                        className="mx-auto"
                    />
                    <p className="text-center mt-3">読込中</p>
                </div>
            </div>
        // </MainLayout>
    );
};

export default Loader;
