import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
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
	const ref = useRef(null);
	const inView = useInView(ref, {once: true});
	return (
		<motion.span
			ref={ref}
			variants={textReveal}
			initial="initial"
			animate={inView ? 'animate' : 'initial'}
			style={{overflow: 'hidden'}}>
			{[...text].map((letter, index) => (
				<motion.span className="letter" variants={letterAnimation} key={index}>
					{letter === ' ' ? '\u00A0' : letter}
				</motion.span>
			))}
		</motion.span>
	);
};
const AnimatedText = ({text}) => {
	const ref = useRef(null);
	const inView = useInView(ref, {once: true});
	return (
		<motion.div
			ref={ref}
			variants={textReveal}
			initial="initial"
			animate={inView ? 'animate' : 'initial'}>
			<Letters text={text} />
		</motion.div>
	);
};
export default AnimatedText;
