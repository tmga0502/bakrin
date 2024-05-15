import React from 'react';
import {Link} from "react-router-dom";
import {MenuType} from "@/ts/appMain/constant/menu/type";

const List = (props: MenuType) => {

    return (
        <Link to={props.link} className="hover:opacity-80">
            <li className={`flex items-center bg-${props.bg } py-3 px-1 mb-1`}>
                {props.icon}<span className="ml-2">{props.title}</span>
            </li>
        </Link>
    );
};

export default List;
