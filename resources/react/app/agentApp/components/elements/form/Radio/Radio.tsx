import React, {forwardRef, ReactNode} from 'react';

type RadioType = React.InputHTMLAttributes<HTMLInputElement> & {
	text: string | ReactNode,
}

const Radio = forwardRef<HTMLInputElement, RadioType>(({ text, ...props }, ref) => {

	return (
		<label className={'radioStyle'}>
			<input type={'radio'} ref={ref} {...props} />
			{text}
		</label>
	);
});

export default Radio;
