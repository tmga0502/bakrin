import React from 'react';
import {Link} from "react-router-dom";
import {LogoutButton} from "@mainFeatures/myPage/components";
import {MyPageTopMenu} from "@mainFeatures/myPage/constants/MyPageTopMenu";
import MyPageCardText from "@mainFeatures/myPage/components/Card/MyPageCardText";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import MyPageCardContainer from "@mainFeatures/myPage/components/Card/MyPageCardContainer";

const MyPageTopContext = () => {
	return (
		<>
			{MyPageTopMenu.map((menu, index) => (
				<Link to={menu.link} key={index}>
					<MyPageCardContainer>
						<MyPageCardText title={menu.title}/>
						<FaRegArrowAltCircleRight className={'text-xl'}/>
					</MyPageCardContainer>
				</Link>
			))}
			<LogoutButton />
		</>
	);
};

export default MyPageTopContext;
