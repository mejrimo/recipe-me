import Recipe from '../Recipe/Recipe';

const Recipes = () => {
	return (
		<div className="container mx-auto ">
			<div className="grid my-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				<Recipe />
			</div>
		</div>
	);
};

export default Recipes;
