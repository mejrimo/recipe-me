import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Recipes from './components/Recipes/Recipes';
import SearchBar from './components/SearchBar/SearchBar';

const API_KEY = import.meta.env.VITE_API_KEY;
const startingUrl = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10&tags=vegetarian`;

export const AppContext = createContext();

const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(startingUrl);
				const data = res.data.recipes;

				setRecipes(data);
				setIsLoading(false);
			} catch (error) {
				alert(error.message);
				setIsError(true);
			}
		};

		fetchData();
	}, []);

	function handleSearchData(dataFromSearchBar) {
		console.log(dataFromSearchBar);
		setIsLoading(true);
		const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&diet=vegetarian&addRecipeInformation=true&query=${dataFromSearchBar}`;

		const fetchData = async () => {
			try {
				const res = await axios.get(searchUrl);
				console.log(res);
				const data = res.data.results;

				setRecipes(data);
				setIsLoading(false);
			} catch (error) {
				alert(error.message);
				setIsError(true);
			}
		};

		fetchData();
	}

	return (
		<>
			{isError ? (
				<Error />
			) : (
				<>
					{isLoading ? (
						<Loader />
					) : (
						<Router>
							<AppContext.Provider value={{ recipes }}>
								<SearchBar onData={handleSearchData} />
								<Routes>
									<Route path="/" element={<Recipes />} />
									<Route path="/about" element={<About />} />
								</Routes>
								<Footer />
							</AppContext.Provider>
						</Router>
					)}
				</>
			)}
		</>
	);
};

export default App;
