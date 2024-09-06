export type MainButtonType = {
	value: string,
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success' | 'dark' | 'default',
	type : 'button' | 'submit',
	size? : 'sm' | 'md' | 'lg' ,
	width? : 'full' | 'half',
	onClick?: any,
	disabled? : boolean,
}
