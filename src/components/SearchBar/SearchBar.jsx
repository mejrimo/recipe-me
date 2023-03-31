import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/vegetarian-food-icon.svg';
import './searchbar.css';

const SearchBar = ({ onData }) => {
	const [search, setSearch] = useState('');

	const navigate = useNavigate();

	function updateSearch(e) {
		setSearch(e.target.value);
	}

	function getSearch(e) {
		e.preventDefault();
		onData(search);
		setSearch('');
	}
	return (
		<nav>
			<div className="logo-container">
				<a href="/" className="logo">
					<img src={logo} alt="App logo" />
				</a>
				<h1 className="logo-title">Recipe Me</h1>
			</div>
			<div className="form-container">
				<form onSubmit={getSearch}>
					<input className="search-bar" type="text" value={search} onChange={updateSearch} />
					<button
						className="search-button"
						type="submit"
						onClick={() => {
							navigate('/');
						}}>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
export default SearchBar;
