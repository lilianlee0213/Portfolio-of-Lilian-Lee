import './style.css';
import {motion, useScroll, useTransform} from 'framer-motion';
import Hero from './Hero';
import {useRef} from 'react';
import AnimatedText from '../AnimatedText/animatedText';

export default function Home() {
	const targetRef = useRef(null);
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
				className="section slide-one"
				ref={targetRef}
				style={{opacity}}>
				<div className="sticky sticky-slide-one">
					<h2 className="absolute fw-600 text-center slide-one-text">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<motion.div
						className="absolute slide-one-circle"
						style={{width: circleWidth}}></motion.div>
					<h2 className="absolute fw-600 text-center slide-one-text slide-one-text-transparent">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<p className="absolute slide-one-title">-Lilian Lee</p>
				</div>
			</motion.section>
			<section className="section slide-two">
				<div className="flex justify-space align-end h-100 slide-two-text">
					<AnimatedText text="Selected"></AnimatedText>
					<AnimatedText text="Work"></AnimatedText>
				</div>
			</section>
		</div>
	);
}
