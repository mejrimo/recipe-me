import { PacmanLoader } from 'react-spinners';

const Loader = () => {
	const color = '#323a34';
	return (
		<div className="flex items-center justify-center h-screen">
			<PacmanLoader color={color} />
		</div>
	);
};

export default Loader;
