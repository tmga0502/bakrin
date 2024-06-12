import React, {ReactNode} from 'react';
import {tv} from "tailwind-variants";

type StatusType = {
    icon: ReactNode,
    name: string,
    color: 'mainGreen' | 'mainYellow' | 'info' | 'success' | 'danger',
    for: string,
    checked: boolean,
}

const panel = tv({
    base: "border rounded-lg p-4 w-24 hover:cursor-pointer",
    variants: {
        color: {
            mainGreen: "bg-mainGreen",
            mainYellow: "bg-mainYellow",
            danger: "bg-danger",
            info: "bg-info",
            success: "bg-success",
        },
        active:{
            false: 'opacity-50',
        },
        defaultVariants: {
            color: 'mainGreen',
        },
    },
});

const Status = (props: StatusType) => {
    return (
        <label htmlFor={props.for} className={panel({color: props.color, active:props.checked})}>
            <div className="p-2 text-center text-white">
                {props.icon}
            </div>
            <div className="text-center text-white">
                {props.name}
            </div>
        </label>
    );
};

export default Status;
