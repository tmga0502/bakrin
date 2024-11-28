import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import SearchProducerContext from "@mainFeatures/search/context/SearchProducerContext";

const SearchUserPage = () => {
	return (
		<MainLayout>
			<SearchProducerContext/>
		</MainLayout>
	);
};

export default SearchUserPage;
