import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import SearchProducerContents from "@mainFeatures/search/contents/SearchProducerContents";

const SearchUserPage = () => {
	return (
		<MainLayout>
			<SearchProducerContents/>
		</MainLayout>
	);
};

export default SearchUserPage;
