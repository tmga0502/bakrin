import React, {forwardRef, ReactNode} from 'react';

type CheckBoxType = React.InputHTMLAttributes<HTMLInputElement> & {
	text: string | ReactNode,
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxType>(({ text, ...props }, ref) => {
	return (
		<label className={'checkBoxStyle'}>
			<input type={'checkbox'} ref={ref} {...props} />
			{text}
		</label>
	);
});

export default CheckBox;
