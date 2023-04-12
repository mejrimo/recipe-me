import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [fError, setFError] = useState(false);
	const [data, setData] = useState([]);

	const startingUrl = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12&tags=vegetarian`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(startingUrl);
				const data = res?.data?.recipes;

				setData(data);
			} catch (error) {
				alert(error.message);

				setFError(true);
			}
			setLoading(false);
		};
		fetchData();
	}, []);
	return { loading, fError, data };
};

export default useFetch;
