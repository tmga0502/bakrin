import {ReactNode} from "react";

type Color = {
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
}
type Value = {
	value: string | ReactNode | null,
}

export type BudgeType = Color & Value

export type BudgeStylePropsType = Color
