import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import striptags from 'striptags';

const API_KEY = import.meta.env.VITE_API_KEY;

const RecipeDetails = () => {
	const [details, setDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				const res = await axios.get(
					`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}&includeNutrition=false`
				);
				const data = res.data;
				console.log(data);
				setDetails(data);
				setIsLoading(false);
			} catch (error) {
				alert(error.message);
				setIsError(true);
			}
		};
		fetchRecipeDetails();
	}, []);

	const ingElements = details?.extendedIngredients?.map((ing) => {
		return (
			<li key={ing.id} className="mb-3">
				{ing.original}
			</li>
		);
	});

	const instElements = details?.analyzedInstructions?.[0]?.steps?.map((inst) => {
		return (
			<li key={inst.number} className="my-3">
				{inst.step}
			</li>
		);
	});

	return (
		<>
			<div className="flex items-center justify-start py-4">
				<AiOutlineArrowLeft
					className="text-2xl md:text-3xl lg:text-4xl cursor-pointer active:text-pisello lg:hover:text-pisello transition-all duration-200"
					onClick={() => navigate(-1)}
				/>
				<h2 className="text-2xl md:text-4xl ml-2">Go Back</h2>
			</div>
			<>
				{isError ? (
					<Error />
				) : (
					<>
						{isLoading ? (
							<Loader />
						) : (
							<div className="flex items-center justify-center mx-auto w-11/12 md:w-9/12 mt-2 mb-4">
								<div className="w-full shadow-md rounded-lg flex flex-col">
									<img
										src={details.image}
										alt={details.title}
										className="w-10/12 md:w-8/12 lg:w-6/12 self-center rounded-lg my-2"
									/>
									<h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left m-2 md:mx-4 lg:mx-6">
										{details.title}
									</h2>
									<p className="m-2 md:mx-4 lg:mx-6 text-grigioscuro text-sm lg:text-base break-words text-center md:text-left">
										{striptags(details.summary)}
									</p>
									<h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left m-2 md:mx-4 lg:mx-6">
										Preparation Time: {details.readyInMinutes}'
									</h2>
									<div>
										<h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left m-2 md:mx-4 lg:mx-6">
											Ingredients
										</h2>
										<ul className="list-inside list-disc columns-2 mx-2 my-4 md:mx-4 lg:mx-6 text-grigioscuro text-sm lg:text-base break-words">
											{ingElements}
										</ul>
									</div>
									<div>
										<h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left m-2 md:mx-4 lg:mx-6">
											Instructions
										</h2>
										<ol className="list-inside list-decimal mx-2 my-4 md:mx-4 lg:mx-6 text-grigioscuro text-sm lg:text-base break-words">
											{instElements}
										</ol>
									</div>
									<div className="m-2 mb-4 md:mx-4 lg:mx-6 text-grigioscuro text-sm lg:text-base break-words text-center md:text-left">
										To know more about this recipe click{' '}
										<a
											href={details.spoonacularSourceUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="uppercase cursor-pointer text-verde active:text-pisello lg:hover:text-pisello transition-all duration-200">
											here
										</a>
									</div>
								</div>
							</div>
						)}
					</>
				)}
			</>
		</>
	);
};
export default RecipeDetails;
