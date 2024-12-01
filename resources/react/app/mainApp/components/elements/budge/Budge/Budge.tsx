import React, {FC, ReactNode} from 'react';
import {tv} from "tailwind-variants";

type BudgeType = {
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
	value: string | ReactNode | null,
}

const BudgeTv = tv({
	base: 'px-2 py-1 inline rounded-md mr-2 text-xs text-white',
	variants: {
		color: {
			mainGreen: 'bg-mainGreen ',
			mainYellow: 'bg-mainYellow',
			danger: 'bg-danger',
			info: 'bg-info',
			success: 'bg-success'
		}
	}
})

const Budge: FC<BudgeType> = ({color, value}) => {
  return (
    <div className={BudgeTv({color: color})}>
      {value}
    </div>
  );
};

export default Budge;
