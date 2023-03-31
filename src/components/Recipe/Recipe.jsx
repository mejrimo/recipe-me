import './recipe.css';
import striptags from 'striptags';

const Recipe = ({ title, image, url, summary }) => {
	return (
		<div className="container">
			<h2 className="title">{title}</h2>
			<img className="image" src={image} alt="Recipe image" />
			<p className="summary">{striptags(summary)}</p>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<button className="recipe-link">View recipe</button>
			</a>
		</div>
	);
};
export default Recipe;
