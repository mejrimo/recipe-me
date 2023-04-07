import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Recipes from './components/Recipes/Recipes';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

const API_KEY = import.meta.env.VITE_API_KEY;
const startingUrl = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12&tags=vegetarian`;
// https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&number=12&addRecipeInformation=true

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
		setIsLoading(true);
		const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&diet=vegetarian&addRecipeInformation=true&query=${dataFromSearchBar}`;

		const fetchData = async () => {
			try {
				const res = await axios.get(searchUrl);
				const data = res.data.results;

				if (!data.length) {
					setIsError(true);
				} else {
					setIsError(false);
					setRecipes(data);
					setIsLoading(false);
				}
			} catch (error) {
				alert(error.message);
				setIsLoading(false);
				setIsError(true);
			}
		};

		fetchData();
	}

	return (
		<>
			<Router>
				<AppContext.Provider value={{ recipes }}>
					<SearchBar onData={handleSearchData} />
					<Routes>
						<Route
							path="/"
							element={<>{isError ? <Error /> : <>{isLoading ? <Loader /> : <Recipes />}</>} </>}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/recipe/:id" element={<RecipeDetails />} />
					</Routes>
					<Footer />
				</AppContext.Provider>
			</Router>
		</>
	);
};

export default App;
