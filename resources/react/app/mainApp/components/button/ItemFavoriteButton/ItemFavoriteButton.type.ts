export type FavoriteButtonType = {
	value: string,
	status: boolean,
	type : 'button' | 'submit',
	size? : 'sm' | 'md' | 'lg' ,
	width? : 'full' | 'half',
	onClick?: any,
}
