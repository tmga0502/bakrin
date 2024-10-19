export const getWidthProps = (width: string) => {
	let result: string
	switch (width){
		case 'full':
			result = '100%'
			break;
		case 'half':
			result = '50%'
			break;
		default:
			result = ''
			break
	}

	return result
}
