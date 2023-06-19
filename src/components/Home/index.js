import './style.css';
import {motion, useScroll, useTransform} from 'framer-motion';
import Hero from './Hero';
import {useRef} from 'react';

export default function Home() {
	const targetRef = useRef();
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const circleWidth = useTransform(scrollYProgress, [0.3, 0.8], ['0%', '150%']);
	const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
	return (
		<div className="section-wrapper">
			<Hero />
			<motion.section
				className="section page-2"
				ref={targetRef}
				style={{opacity}}>
				<div className="sticky sticky-page-2">
					<h2 className="absolute fw-600 text-center page2-text">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<motion.div
						className="absolute page2-circle"
						style={{width: circleWidth}}></motion.div>
					<h2 className="absolute fw-600 text-center page2-text page2-text-transparent">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<p className="absolute page2-title">-Lilian Lee</p>
				</div>
			</motion.section>
		</div>
	);
}
