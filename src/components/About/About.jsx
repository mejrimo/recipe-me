import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="mx-5 lg:mx-10 flex flex-col">
				<div className="mb-5 flex items-center justify-between">
					<AiOutlineArrowLeft
						className="text-2xl md:text-3xl lg:text-4xl cursor-pointer active:text-pisello lg:hover:text-pisello transition-all duration-200"
						onClick={() => navigate(-1)}
					/>
					<h2 className="mx-auto text-2xl md:text-3xl lg:text-4xl">About</h2>
				</div>
				<p className="text-grigioscuro text-base lg:text-lg xl:text-xl break-words text-center md:text-left">
					Welcome to this project! This website was created with React, a popular JavaScript library
					for building dynamic user interfaces. Specifically, I used React version 18.2.0 to handle
					user interaction with the page and render changes in real-time. Additionally, I utilized
					React Router version 6.9.0 for navigation between different sections of the site and
					useContext to manage the application state. This was a real challenge for me, as I had to
					put into practice all the topics I learned throughout my learning journey. But I'm very
					satisfied with the result and I hope that you like this project!
					<br />
					Mohamed M.
				</p>
			</div>
		</div>
	);
};
export default About;
