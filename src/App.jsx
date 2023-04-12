import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useSearch from './hooks/useSearch';
import useFetch from './hooks/useFetch';
import About from './components/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Recipes from './components/Recipes/Recipes';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

// https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&number=12&addRecipeInformation=true

export const AppContext = createContext();

const App = () => {
	const [query, setQuery] = useState('');
	const { loading, fError, data } = useFetch();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [recipes, setRecipes] = useState([]);
	const { isSearching, isErr, searchData } = useSearch(query);
	console.log(data);

	const handleSearchData = (dataFromSearchBar) => {
		setQuery(dataFromSearchBar);
	};

	useEffect(() => {
		if (query) {
			setRecipes(searchData);
			setIsError(isErr);
			setIsLoading(isSearching);
		} else {
			setRecipes(data);
			setIsError(fError);
			setIsLoading(loading);
		}
	}, [query]);

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
