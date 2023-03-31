import { PacmanLoader } from 'react-spinners';
import './loader.css';

const Loader = () => {
	const color = '#323a34';
	return (
		<div className="loader-container">
			<PacmanLoader color={color} />
		</div>
	);
};

export default Loader;
