import './style.css';
import {motion} from 'framer-motion';
import Hero from './Hero';

export default function Home() {
	return (
		<div className="section-wrapper">
			<Hero />
			<section className="section page-2" style={{}}>
				<div className="sticky sticky-page-2">
					<h2 className="absolute fw-600 text-center page2-text">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<motion.div className="absolute page2-circle"></motion.div>
					<h2 className="absolute fw-600 text-center page2-text page2-text-transparent">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
				</div>
			</section>
		</div>
	);
}
