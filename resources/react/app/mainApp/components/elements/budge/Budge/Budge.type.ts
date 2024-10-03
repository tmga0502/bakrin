import {ReactNode} from "react";

export type BudgeType = {
	value: string | ReactNode | null,
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
}
