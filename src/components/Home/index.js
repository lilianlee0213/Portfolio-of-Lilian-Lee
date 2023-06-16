import {useEffect, useRef, useState} from 'react';
import './style.css';
import {
	animate,
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
const textReveal = {
	animate: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};
const letterAnimation = {
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const Letters = ({text}) => {
	return (
		<motion.span
			variants={textReveal}
			initial="initial"
			animate="animate"
			style={{overflow: 'hidden'}}>
			{[...text].map((letter) => (
				<motion.span className="letter" variants={letterAnimation}>
					{letter === ' ' ? '\u00A0' : letter}
				</motion.span>
			))}
		</motion.span>
	);
};
const Text = ({text}) => {
	return (
		<motion.div variants={textReveal}>
			<Letters text={text} />
		</motion.div>
	);
};
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
	const [isCardOut, setCardOut] = useState(false);
	const targetRef = useRef(null);
	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef, {once: true});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const upboxY = useTransform(scrollYProgress, [0.1, 0.4], ['600%', '100%']);
	const rotateXBox = useTransform(scrollYProgress, [0.3, 0.4], [140, -50]);
	const rotateYBox = useTransform(scrollYProgress, [0.3, 0.4], [140, -50]);
	const openBox = useTransform(scrollYProgress, [0.4, 0.5], [0, 300]);
	const cardY = useTransform(scrollYProgress, [0.5, 0.6], [70, -150]);
	const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
	const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest >= 0.6) {
			setCardOut(true);
		} else {
			setCardOut(false);
		}
		console.log(latest);
	});

	return (
		<div className="section-wrapper">
			<div id="home" className="section hero" ref={targetRef}>
				<motion.div className="sticky sticky-hero" style={{opacity}}>
					<motion.div
						className="absolute w-100 fw-600 uppercase text-center hero-text"
						style={{opacity: textOpacity}}>
						<Text text="Hi, I'm Lilian."></Text>
						<Text text="I'm a Front-end"></Text>
						<Text text="Developer."></Text>
					</motion.div>
					<motion.div
						ref={inViewRef}
						className="absolute w-100 marquee-container marquee-1"
						style={{
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
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
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
						}}>
						<>
							{MarqueeSlide()}
							{MarqueeSlide()}
						</>
					</motion.div>
					<motion.div
						className="flex justify-center cube-container"
						style={{y: upboxY}}>
						<motion.div
							className="cube"
							style={{rotateX: rotateXBox, rotateY: rotateYBox}}>
							<div id="front" className="card">
								Front
							</div>
							<div id="back" className="card">
								Back
							</div>
							<div id="left" className="card">
								Left
							</div>
							<div id="right" className="card">
								Right
							</div>
							<motion.div style={{right: openBox}} id="top" className="card">
								Top
							</motion.div>
							<div id="bottom" className="card">
								Bottom
							</div>
							<motion.div
								id="profile"
								className="profile-card"
								style={{top: cardY}}>
								<motion.div className="photo-frame-image"></motion.div>
								<div className="photo-frame-text">My Card1</div>
							</motion.div>
						</motion.div>
					</motion.div>
					<motion.div className="absolute cube-text-container">
						<motion.p
							className="cube-text"
							initial={{opacity: 0}}
							animate={{
								rotate: isCardOut ? [7, 0, -7] : [],
								scale: isCardOut ? [1, 1.5, 1] : [],
								opacity: isCardOut ? 1 : 0,
							}}
							transition={{
								rotate: {
									repeat: Infinity,
									ease: 'linear',
									repeatType: 'reverse',
									duration: 0.3,
									delay: 0.3,
								},
							}}>
							This is me, Lilian!
						</motion.p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
