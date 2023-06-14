import {useRef} from 'react';
import './style.css';
import {motion, useScroll, useTransform} from 'framer-motion';
export default function Home() {
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 0.2], [220, 0]);
	const textToRight = useTransform(scrollYProgress, [0, 0.4], [-500, 30]);
	const textToLeft = useTransform(scrollYProgress, [0, 0.4], [500, -60]);
	return (
		<div className="section-wrapper">
			<section
				id="home"
				className="flex justify-center align-center section section-hero">
				<div>Portfolio of Lilian Lee</div>
			</section>
			<motion.section ref={targetRef} className="section page-2">
				<div className="relative h-100 container">
					<div className="absolute circle">
						<motion.div style={{y}} className="absolute profile"></motion.div>
					</div>
					<div className="intro-text">
						<motion.h1 style={{translateX: textToRight}} className="absolute">
							Hi, I'm
						</motion.h1>
						<motion.h1 style={{translateX: textToLeft}} className="absolute">
							Lilian
						</motion.h1>
					</div>
				</div>
				Home
			</motion.section>
			<section id="home" className="section section-home">
				Home
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
		</div>
	);
}
