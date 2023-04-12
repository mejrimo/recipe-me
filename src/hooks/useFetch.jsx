import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [fLoading, setFLoading] = useState(true);
	const [fError, setFError] = useState(false);
	const [fData, setFData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				const data = await res?.data?.recipes;

				setFData(data);
			} catch (error) {
				alert(error.message);
				setFError(true);
			}
			setFLoading(false);
		};

		fetchData();
	}, []);

	return { fLoading, fError, fData };
};

export default useFetch;
