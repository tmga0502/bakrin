import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {Link} from "react-router-dom";

const List = (props:{name:string, link:string}) => {
    return (
        <Link to={props.link}>
            <div className="w-full border rounded-md bg-white p-4 flex justify-between items-center mb-4 shadow-md hover:opacity-80">
                <p className="m-0">{props.name}</p>
                <FaRegArrowAltCircleRight className="text-xl"/>
            </div>
        </Link>
    )
};

export default List;
