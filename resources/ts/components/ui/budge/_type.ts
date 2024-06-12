import {ReactNode} from "react";

type BudgeType = {
	value: string | ReactNode | null,
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
}

export {
	BudgeType,
}
