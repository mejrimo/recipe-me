import { useContext } from 'react';
import { AppContext } from '../../App';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
	const { recipes } = useContext(AppContext);

	const recipesElements = recipes.map((recipe) => {
		const { id, title, image, spoonacularSourceUrl, summary } = recipe;

		return (
			<Recipe key={id} title={title} image={image} url={spoonacularSourceUrl} summary={summary} />
		);
	});

	return (
		<div className="container mx-auto ">
			<div className="grid my-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{recipesElements}
			</div>
		</div>
	);
};

export default Recipes;
