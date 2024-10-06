import React, {ReactNode} from "react";

export type RadioType = React.InputHTMLAttributes<HTMLInputElement> & {
	text: string | ReactNode,
}

