import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full flex items-center justify-between bg-verde p-2">
			<div className="flex items-center justify-center">
				<a
					href="https://github.com/mejrimo"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer text-bianco text-xl md:text-2xl active:text-pisello lg:hover:text-pisello transition-all duration-200 ">
					<AiFillGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/mohamed-mejri-925157234/"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer mx-1 text-bianco text-xl md:text-2xl active:text-pisello lg:hover:text-pisello transition-all duration-200 ">
					<AiFillLinkedin />
				</a>
			</div>
			<div className="text-bianco text-xs md:text-sm text-center">
				Copyright &copy; 2023. All rights reserved.
			</div>
			<Link
				to="/about"
				rel="noopener noreferrer"
				className="cursor-pointer text-bianco text-sm md:text-base active:text-pisello lg:hover:text-pisello transition-all duration-200 mr-1 ">
				ABOUT
			</Link>
		</footer>
	);
};
export default Footer;
