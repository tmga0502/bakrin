import React from 'react';
import {MainButtonType} from "@/ts/components/ui/button/_type";
import {MainButtonTv} from "@/ts/components/ui/button/_function";

const MainButton = (props: MainButtonType) => {
	return(
		<button type={props.type} className={MainButtonTv({width: props.width, size: props.size, color: props.color, disable:props.disabled })} onClick={props.onClick} disabled={props.disabled}>
			{props.value}
		</button>
	)
}
export default MainButton;
