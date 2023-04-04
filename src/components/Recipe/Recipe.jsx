import striptags from 'striptags';

const Recipe = ({ title, image, url, summary }) => {
	return (
		<div className="mb-5 w-72 md:w-80 lg:w-96 justify-self-center cursor-pointer shadow-md rounded-lg transform hover:shadow-lg  hover:-translate-y-1 transition-all duration-200">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<img className="rounded-lg w-full" src={image} alt={`${title} image`} />
				<h2 className="text-2xl m-2 hover:translate-x-1 transition-all duration-200">{title}</h2>
			</a>
			<p className="m-2 text-sm text-grigioscuro line-clamp-4">{striptags(summary)}</p>
		</div>
	);
};
export default Recipe;
