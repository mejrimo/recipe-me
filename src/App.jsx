import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import useSearch from './hooks/useSearch';
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
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState('');
	const { fLoading, fError, fData } = useFetch(startingUrl);
	const { isSearching, isErr, searchData } = useSearch(query);

	const handleSearchData = (dataFromSearchBar) => {
		setQuery(dataFromSearchBar);
	};

	useEffect(() => {
		if (query) {
			setRecipes(searchData);
			setIsError(isErr);
			setIsLoading(isSearching);
		} else {
			setRecipes(fData);
			setIsError(fError);
			setIsLoading(fLoading);
		}
	}, [fData, searchData]);

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
