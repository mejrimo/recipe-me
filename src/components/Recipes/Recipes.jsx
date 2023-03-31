import { useContext } from 'react';
import { AppContext } from '../../App';
import Recipe from '../Recipe/Recipe';
import './recipes.css';

const Recipes = () => {
	const { recipes } = useContext(AppContext);

	const recipesElements = recipes.map((recipe) => {
		const { id, title, image, spoonacularSourceUrl, summary } = recipe;

		return (
			<Recipe key={id} title={title} image={image} url={spoonacularSourceUrl} summary={summary} />
		);
	});

	return <div className="recipes-container">{recipesElements}</div>;
};

export default Recipes;
