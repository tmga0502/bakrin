export type MainButtonType = {
	value: string,
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success' | 'dark',
	type : 'button' | 'submit',
	size? : 'sm' | 'md' | 'lg' ,
	width? : 'full' | 'half',
	onClick?: any,
	disabled? : boolean,
}
