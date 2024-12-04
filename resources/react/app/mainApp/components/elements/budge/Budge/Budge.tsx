import React, {FC, ReactNode} from 'react';
import {tv} from "tailwind-variants";

type BudgeType = {
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
	value: string | ReactNode | null,
	size?: 'sm' | 'md' | 'lg'
}

const BudgeTv = tv({
	base: 'inline rounded-md mr-2 text-xs text-white',
	variants: {
		color: {
			mainGreen: 'bg-mainGreen ',
			mainYellow: 'bg-mainYellow',
			danger: 'bg-danger',
			info: 'bg-info',
			success: 'bg-success'
		},
		size: {
			sm: 'px-1 py-1 text-xs',
			md: 'px-2 py-1 text-xs',
			lg: 'px-3 py-2 text-md',
		}
	}
})

const Budge: FC<BudgeType> = ({color, value, size = 'md'}) => {
  return (
    <div className={BudgeTv({color: color, size:size})}>
      {value}
    </div>
  );
};

export default Budge;
