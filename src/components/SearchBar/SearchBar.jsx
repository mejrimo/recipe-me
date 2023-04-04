import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/img/vegetarian-food-icon.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ onData }) => {
	const [search, setSearch] = useState('');
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const navigate = useNavigate();

	function updateSearch(e) {
		setSearch(e.target.value);
	}

	function getSearch(e) {
		e.preventDefault();
		closeMobileMenu();
		onData(search);
		setSearch('');
		// navigate('/');
	}

	return (
		<>
			<div className="z-50 sticky top-0">
				<nav className="relative flex flex-wrap items-center justify-between px-3 py-4  bg-verde drop-shadow">
					<div className="container flex flex-wrap items-center justify-between">
						<div className="w-full relative flex items-center justify-between lg:w-auto">
							<Link
								to="#"
								className="text-3xl font-bold leading-relaxed flex py-2 whitespace-no-wrap text-crema">
								<img src={logo} alt="Recipe Me logo" className="w-9 me-2" />
								<h1>Recipe Me</h1>
							</Link>
							<button
								className="cursor-pointer text-3xl text-crema leading-none px-3 block lg:hidden outline-none focus:outline-none"
								type="button"
								onClick={handleClick}>
								<AiOutlineSearch />
							</button>
						</div>
						<div
							className={
								'lg:flex flex-grow flex- items-center justify-center mx-auto' +
								(click ? ' flex' : ' hidden')
							}>
							<form onSubmit={getSearch}>
								<input
									className="w-72 lg:w-96 text-verde py-2 pl-3 pr-10 rounded-full focus:outline-verde focus:ring-verde focus:border-verde"
									type="text"
									placeholder="Search for a recipe..."
									value={search}
									onChange={updateSearch}
								/>
								<button className="-ml-8 border-6 bg-transparent w-8 h-8 text-verde" type="submit">
									<AiOutlineSearch />
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};
export default SearchBar;
