import React, {ReactNode} from 'react';
import {tv} from "tailwind-variants";

const budge = tv({
    base: "text-white px-1 py-0.5 inline rounded-md mr-2 text-xs font-normal",
    variants: {
        color: {
            mainGreen: "bg-mainGreen",
            mainYellow: "bg-mainYellow",
            danger: "bg-danger",
            info: "bg-info",
            success: "bg-success",
        },
        defaultVariants: {
            color: 'mainGreen',
        },
    },
});

type BudgeProps = {
  value: string | ReactNode | null,
  color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
}

const Budge = (props:BudgeProps) => {
  return (
    <div className={budge({color: props.color})}>
      {props.value}
    </div>
  );
};

export default Budge;
