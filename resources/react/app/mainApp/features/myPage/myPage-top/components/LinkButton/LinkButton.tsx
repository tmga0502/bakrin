import React from 'react';
import {LinkButtonType} from "./LinkButton.type";
import {Link} from "react-router-dom";
import ButtonPanel from "@/react/app/mainApp/features/myPage/myPage-top/components/ButtonPanel/ButtonPanel";

const LinkButton: React.FC<LinkButtonType> = ({linkUrl, name}) => {
	return (
		<Link to={linkUrl}>
			<ButtonPanel name={name}/>
		</Link>
	);
};

export default LinkButton;
