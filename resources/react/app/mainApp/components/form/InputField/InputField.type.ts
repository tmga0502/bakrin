import {ReactNode} from "react";

export type InputFieldType = {
	label: string;
	id: string;
	type: string;
	defaultValue?: string;
	required?: boolean;
	unit?: string | ReactNode;
	disabled?: boolean;
	onChange?: any,
}
