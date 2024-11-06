export const getFontSizeProps = (size: string) => {
	let result = '14'
	switch (size){
		case 'sm':
			result = '12px'
			break;
		case 'md':
			result = '14px'
			break;
		case 'lg':
			result = '16px'
			break;
	}

	return result
}
