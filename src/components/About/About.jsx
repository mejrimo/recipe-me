import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
	return (
		<div className="about-page-container">
			<div>
				<div className="about-title">
					<Link to="/" className="back-arrow">
						<AiOutlineArrowLeft />
					</Link>
					<h2>About</h2>
				</div>
				<div className="about-text">
					<p>
						Welcome to this project! This website was created with React, a popular JavaScript
						library for building dynamic user interfaces. Specifically, I used React version 18.2.0
						to handle user interaction with the page and render changes in real-time. Additionally,
						I utilized React Router version 6.9.0 for navigation between different sections of the
						site and useContext to manage the application state. This was a real challenge for me,
						as I had to put into practice all the topics I learned throughout my learning journey.
						But I'm very satisfied with the result and I hope that you like this project!
						<br />
						<br /> Mohamed M.
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
