export type FavoriteButtonType = {
	value: string,
	status: boolean,
	type : 'button' | 'submit',
	size? : 'sm' | 'md' | 'lg' ,
	width? : 'full' | 'half',
	align?: 'left' | 'center' | 'right',
	onClick?: any,
}
