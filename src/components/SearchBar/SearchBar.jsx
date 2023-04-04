import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/vegetarian-food-icon.svg';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

const SearchBar = ({ onData }) => {
	const [search, setSearch] = useState('');

	const navigate = useNavigate();

	function updateSearch(e) {
		setSearch(e.target.value);
	}

	function getSearch(e) {
		e.preventDefault();
		toggleMenu();
		onData(search);
		setSearch('');
		navigate('/');
	}

	function toggleMenu() {
		const formContainer = document.getElementById('form-container');

		formContainer.classList.toggle('hidden');
	}

	return (
		<nav className="z-50 relative bg-verde  flex justify-between items-center py-4 px-3 drop-shadow sticky top-0">
			{/* LOGO */}
			<div className="flex items-center justify-between ">
				<a href="/">
					<img src={logo} alt="Recipe Me logo" className="w-9 me-2" />
				</a>
				<h1 className="text-3xl text-crema font-bold">Recipe Me</h1>
			</div>
			{/* SEARCH BAR */}
			<div
				id="form-container"
				className="hidden absolute top-14 inset-x-0 px-5 py-5 bg-verde border-t-[1px] border-opacity-50 border-t-pisello flex items-center justify-center  md:relative md:flex  md:top-0 md:right-0 md:p-0 md:items-center md:mx-auto md:-left-16 md:border-none">
				<form onSubmit={getSearch}>
					<input
						className=" text-verde w-72 py-1 pl-3 pr-10 rounded-full focus:outline-verde focus:ring-verde focus:border-verde md:w-96"
						type="text"
						placeholder="Search for a recipe..."
						value={search}
						onChange={updateSearch}
					/>
					<button
						className="-ml-8 border-6 bg-transparent w-8 h-8
						"
						type="submit">
						<AiOutlineSearch />
					</button>
				</form>
			</div>
			{/* TOGGLE MENU ICON */}
			<a class="md:hidden text-crema text-3xl cursor-pointer" onClick={toggleMenu}>
				<AiOutlineSearch />
			</a>
		</nav>
	);
};
export default SearchBar;
