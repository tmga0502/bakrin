export const getSizeProps = (size: string) => {
	let result = '6px 10px'
	switch (size){
		case 'sm':
			result = '4px 8px'
			break;
		case 'md':
			result = '6px 10px'
			break;
		case 'lg':
			result = '8px 12px'
			break;
	}

	return result
}
