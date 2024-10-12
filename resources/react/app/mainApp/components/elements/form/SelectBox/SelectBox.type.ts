import React from "react";

export type SelectBoxType = React.SelectHTMLAttributes<HTMLSelectElement> & {
	optionObj: any,
	addBlankOption?: boolean,
	onChange? : any,
}

