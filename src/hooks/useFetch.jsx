import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [fError, setFError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				const dataR = await res?.data?.recipes;

				setData(dataR);
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
