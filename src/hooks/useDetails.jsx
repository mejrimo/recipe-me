import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const useDetails = (id) => {
	const [isDLoading, setIsDLoading] = useState(true);
	const [isDError, setIsDError] = useState(false);
	const [detailsData, setDetailsData] = useState([]);

	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				const res = await axios.get(
					`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
				);
				const data = res.data;
				setDetailsData(data);
			} catch (error) {
				alert(error.message);
				setIsDError(true);
			}
			setIsDLoading(false);
		};
		fetchRecipeDetails();
	}, [id]);

	return { isDLoading, isDError, detailsData };
};
export default useDetails;
