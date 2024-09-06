export type TextareaFieldType = {
	label: string;
	id: string;
	rows? : number,
	defaultValue?: string;
	required?: boolean;
	disabled?: boolean;
	onChange?: any,
}
