import React from 'react';
import UserSearchForm from "@mainFeatures/search/components/UserSearchForm/UserSearchForm";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {UserType} from "@/react/types/UserType";
import {UserPanelForList} from "@mainFeatures/user/components";
import {useRecoilValue} from "recoil";
import {SearchUserResultStates} from "@/react/app/mainApp/states/SearchUserStates";

const SearchProducerContext = () => {
	const searchUserResult = useRecoilValue(SearchUserResultStates)

	return (
		<>
			<UserSearchForm/>
			<GridBox>
				{searchUserResult.map((item: UserType) => (
					<UserPanelForList data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default SearchProducerContext;
