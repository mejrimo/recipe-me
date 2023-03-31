import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/vegetarian-food-icon.svg';
import './searchbar.css';

const SearchBar = ({ onData }) => {
	const [search, setSearch] = useState('');

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
				<img className="logo" src={logo} alt="App logo" />
				<h1 className="logo-title">Recipe Me</h1>
			</div>
			<div className="form-container">
				<form onSubmit={getSearch}>
					<input className="search-bar" type="text" value={search} onChange={updateSearch} />
					<Link to="/" rel="noopener noreferrer">
						<button className="search-button" type="submit">
							Search
						</button>
					</Link>
				</form>
			</div>
		</nav>
	);
};
export default SearchBar;
