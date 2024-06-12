import React from 'react';
import {WrapperType} from "@/ts/components/ui/box/_type";

const Wrapper = (props: WrapperType) => {
	return(
		<div className="flex-col min-h-screen min-w-80">
			{props.children}
		</div>
	)
}

export default Wrapper;
