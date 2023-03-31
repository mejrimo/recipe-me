import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="container-icone">
				<a
					href="https://github.com/mejrimo"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon">
					<AiFillGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/mohamed-mejri-925157234/"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon">
					<AiFillLinkedin />
				</a>
			</div>
			<div className="copyright">Copyright &copy; 2023. All rights reserved.</div>
			<div className="about-container">
				<Link to="/about" rel="noopener noreferrer" className="about">
					ABOUT
				</Link>
			</div>
		</footer>
	);
};
export default Footer;
