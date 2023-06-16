import {motion} from 'framer-motion';
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
const AnimatedText = ({text}) => {
	return (
		<motion.div variants={textReveal}>
			<Letters text={text} />
		</motion.div>
	);
};
export default AnimatedText;
