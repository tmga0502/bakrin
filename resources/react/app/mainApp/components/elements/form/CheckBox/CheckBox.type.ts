import React, {ReactNode} from "react";

export type CheckBoxType = React.InputHTMLAttributes<HTMLInputElement> & {
	text: string | ReactNode,
}

