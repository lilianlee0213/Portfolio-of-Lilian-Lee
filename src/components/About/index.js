import './style.css';
import {motion} from 'framer-motion';
export default function About() {
	return (
		<div className="section-wrapper">
			<section id="about" className="grid justify-center section section-about">
				<div className="about-image-container">
					<motion.div
						className="w-100 h-100 about-image"
						whileHover={{scale: 1.05}}></motion.div>
				</div>
				<div className="about-content-container">
					<div className="about-content-stories">
						<div className="story">
							<div className="story-cover">Work</div>
							<div className="story-cover">🍎</div>
							<div className="story-title">Good times</div>
						</div>
					</div>
					<div className="about-content-desc">
						<h1 className="fw-300">Lilian Lee</h1>
						<h2 className="fw-300">Front-End Developer</h2>
						<p className="fw-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							repellendus, perferendis praesentium aspernatur, quisquam nam
							molestias pariatur reprehenderit magnam eos minus ab maiores autem
							asperiores tempore quidem explicabo dicta laboriosam.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
