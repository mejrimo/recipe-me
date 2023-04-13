import { useContext } from 'react';
import { AppContext } from '../../App';
import { Link } from 'react-router-dom';
import striptags from 'striptags';

const Recipe = ({ id, title, image, summary }) => {
	const { recipes } = useContext(AppContext);

	const recipesElements = recipes?.map((recipe) => {
		const { id, title, image, summary } = recipe;

		return (
			<div
				key={id}
				className="mb-5 w-72 md:w-80 lg:w-96 justify-self-center cursor-pointer shadow-md rounded-lg transform hover:shadow-lg  hover:-translate-y-1 transition-all duration-200">
				<Link to={`/recipe/${id}`}>
					<img className="rounded-lg w-full" src={image} alt={`${title} image`} />
					<h2 className="text-2xl m-2 hover:translate-x-1 transition-all duration-200">{title}</h2>
				</Link>
				<p className="m-2 text-sm text-grigioscuro line-clamp-4">{striptags(summary)}</p>
			</div>
		);
	});

	return <>{recipesElements}</>;
};
export default Recipe;

// return (
// 	<div className="mb-5 w-72 md:w-80 lg:w-96 justify-self-center cursor-pointer shadow-md rounded-lg transform hover:shadow-lg  hover:-translate-y-1 transition-all duration-200">
// 		<Link to={`/recipe/${id}`}>
// 			<img className="rounded-lg w-full" src={image} alt={`${title} image`} />
// 			<h2 className="text-2xl m-2 hover:translate-x-1 transition-all duration-200">{title}</h2>
// 		</Link>
// 		<p className="m-2 text-sm text-grigioscuro line-clamp-4">{striptags(summary)}</p>
// 	</div>
// )
