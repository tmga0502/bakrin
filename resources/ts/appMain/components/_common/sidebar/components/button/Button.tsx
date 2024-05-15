import React from 'react';
import {Link} from "react-router-dom";
import {ButtonType} from "@/ts/appMain/components/_common/sidebar/components/button/type";

const Button = (props: ButtonType) => {
    return (
        <Link to={props.link} className="w-1/2 h-[60px] bg-gray-500 px-2 py-2 hover:opacity-80">
            <div className="text-white text-center h-1/2 leading-[30px] flex justify-center items-center">
                {props.icon}
            </div>
            <div className="text-white text-center h-1/2 leading-[30px]">
                {props.title}
            </div>
        </Link>
    );
};

export default Button;
