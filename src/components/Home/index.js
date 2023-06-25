import './style.css';
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import AnimatedText from '../AnimatedText/animatedText';

const MarqueeSlide = () => {
	return (
		<motion.div className="marquee-slide">
			<span className="marquee-text">I think creative &amp; I build them</span>
			<span className="marquee-text">I think creative &amp; I build them</span>
			<span className="marquee-text">I think creative &amp; I build them</span>
			<span className="marquee-text">I think creative &amp; I build them</span>
		</motion.div>
	);
};
export default function Home() {
	const targetRef = useRef(null);
	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef, {once: true});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const circleWidth = useTransform(scrollYProgress, [0.3, 0.9], ['0%', '100%']);
	const opacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

	return (
		<>
			<main id="home" className="section section-hero">
				<div className="absolute w-100 hero-heading">
					<div className="absolute w-100 fw-700 uppercase text-center hero-main-text hero-main-top-text">
						<AnimatedText text="Hello There"></AnimatedText>
					</div>
					<motion.div className="absolute flex justify-center align-end hero-main-middle">
						<motion.h1
							style={{
								opacity: isInView ? 1 : 0,
								transition: 'all .6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s',
							}}>
							I'm
						</motion.h1>
						<motion.div
							className="hero-main-middle-image"
							initial={{scale: 1}}
							animate={{scale: 1}}>
							<motion.div
								className="hero-image"
								whileHover={{scale: 1.1}}
								transition={{duration: 0.3}}></motion.div>
						</motion.div>
						<motion.h1
							className="text-center"
							style={{
								opacity: isInView ? 1 : 0,
								transition: 'all .6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s',
							}}>
							a Front-end <br />
							Developer
						</motion.h1>
					</motion.div>
					<div className="absolute w-100 fw-700 uppercase text-center hero-main-text hero-main-top-text text-transparent">
						<AnimatedText text="Hello There"></AnimatedText>
					</div>
					<div className="absolute w-100 fw-700 uppercase text-center hero-main-text hero-main-bottom-text">
						<AnimatedText text="Lilian Lee"></AnimatedText>
					</div>
				</div>
				<motion.div
					ref={inViewRef}
					className="absolute w-100 marquee-container marquee-1"
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all .6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s',
					}}>
					<>
						{MarqueeSlide()}
						{MarqueeSlide()}
					</>
				</motion.div>
				<motion.div
					ref={inViewRef}
					className="absolute w-100 marquee-container marquee-2"
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all .6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s',
					}}>
					<>
						{MarqueeSlide()}
						{MarqueeSlide()}
					</>
				</motion.div>
			</main>
			<motion.section
				className="section section-intro"
				ref={targetRef}
				style={{opacity}}>
				<div className="sticky sticky-section-intro">
					<h2 className="absolute fw-600 text-center section-intro-text">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<motion.div
						className="absolute section-intro-circle"
						style={{width: circleWidth}}></motion.div>
					<h2 className="absolute fw-600 text-center section-intro-text section-intro-text-transparent">
						I love creating fun, engaging, and interactive things for the web.
					</h2>
					<p className="absolute section-intro-title">-Lilian Lee</p>
				</div>
			</motion.section>
		</>
	);
}
