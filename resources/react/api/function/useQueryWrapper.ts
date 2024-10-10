import {useQuery} from "react-query";

export const useQueryWrapper = (key: any, queryFn: () => Promise<any>) => {
	return useQuery(key, queryFn, {
		suspense: true,
	});
};
