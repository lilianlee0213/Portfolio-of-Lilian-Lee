import {Link} from 'react-scroll';
import './style.css';
import AnimatedText from '../AnimatedText/animatedText';
export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col justify-end section section-contact">
			<div className="contact-links">
				<ul className="flex justify-space">
					<li className="contact-link">
						<a href="mailto:lilianlee0213@gmail.com" target="_blank">
							Email
						</a>
					</li>
					<li className="contact-link">
						<a
							href="https://www.linkedin.com/in/lilian-lee-64720b240/"
							target="_blank">
							LinkedIn
						</a>
					</li>
					<li className="contact-link">
						<a href="https://github.com/lilianlee0213" target="_blank">
							Github
						</a>
					</li>
					<li className="contact-link">
						<Link to="home">Back to top</Link>
					</li>
				</ul>
			</div>
			<AnimatedText
				text="Get in touch"
				className="uppercase fw-700 text-center contact-title"
			/>
		</section>
	);
}
