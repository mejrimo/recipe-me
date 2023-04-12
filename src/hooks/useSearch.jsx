import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const useSearch = (query) => {
	const [isSearching, setIsSearching] = useState(true);
	const [isErr, setIsErr] = useState(false);
	const [searchData, setSearchData] = useState([]);

	const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&diet=vegetarian&addRecipeInformation=true&query=${query}`;

	const mounted = useRef();
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			const fetchSearchData = async () => {
				try {
					const res = await axios.get(searchUrl);
					const data = res?.data?.results;

					if (!data.length) {
						setIsErr(true);
					} else {
						setIsErr(false);
						setSearchData(data);
						setIsSearching(false);
					}
				} catch (error) {
					alert(error.message);
					setIsSearching(false);
					setIsErr(true);
				}
			};

			fetchSearchData();
		}
	}, [query]);

	return { isSearching, isErr, searchData };
};

export default useSearch;