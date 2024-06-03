import React from 'react';
import {ContainerType, MainType, WrapperType} from "./type";

const Wrapper = (props: WrapperType) => {
    return(
        <div className="flex-col min-h-screen min-w-80">
            {props.children}
        </div>
    )
}

const Container = (props: ContainerType) => {
    return (
        <div className="max-w-[1280px] min-w-[360px] mx-auto flex min-h-[calc(100vh_-_120px)]">
            {props.children}
        </div>
    );
};

const MainBox = (props: MainType) => {
    return (
        <div className="w-full md:w-[calc(100% - 250px)] p-4 mb-24">
            {props.children}
        </div>
    );
};

export {
    Wrapper,
    Container,
    MainBox,
};
