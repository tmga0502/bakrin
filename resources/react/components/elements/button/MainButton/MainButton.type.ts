export type MainButtonType = {
	text: string,
	color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success' | 'dark' | 'default',
	type : 'button' | 'submit',
	size? : 'sm' | 'md' | 'lg' ,
	width? : 'full' | 'half',
	align? : 'left' | 'center' | 'right',
	onClick?: any,
	disabled? : boolean,
}
