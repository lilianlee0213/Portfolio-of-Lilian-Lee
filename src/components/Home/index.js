import {useEffect, useRef, useState} from 'react';
import './style.css';
import {
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
export default function Home() {
	const [isCardOut, setCardOut] = useState(false);
	const targetRef = useRef(null);
	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef, {once: true});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const upboxY = useTransform(scrollYProgress, [0.1, 0.3], ['500%', '0%']);
	const rotateXBox = useTransform(scrollYProgress, [0.25, 0.5], [140, -50]);
	const rotateYBox = useTransform(scrollYProgress, [0.25, 0.5], [140, -50]);
	const openBox = useTransform(scrollYProgress, [0.5, 0.6], [0, 300]);
	const cardY = useTransform(scrollYProgress, [0.6, 0.8], [70, -200]);
	const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest >= 0.8) {
			setCardOut(true);
		} else {
			setCardOut(false);
		}
		console.log(latest);
	});
	return (
		<div className="section-wrapper">
			<section id="home" className="section section-1" ref={targetRef}>
				<motion.div className="sticky ff-main hero" style={{opacity}}>
					<motion.div
						className="flex justify-center align-center cube-container"
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
					<motion.div
						ref={inViewRef}
						className="absolute w-100 marquee-container"
						style={{
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
						}}>
						<motion.div
							className="marquee-slide"
							animate={{
								x: '-100%',
								transition: {duration: 5, ease: 'linear', repeat: Infinity},
							}}>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
						</motion.div>
						<motion.div
							className="marquee-slide"
							animate={{
								x: '-100%',
								transition: {duration: 5, ease: 'linear', repeat: Infinity},
							}}>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
							<span className="marquee-text">
								I think creative & I build them
							</span>
						</motion.div>
					</motion.div>
					<motion.div
						ref={inViewRef}
						className="absolute title-container"
						style={{
							transform: isInView ? 'none' : 'translateX(-200px) ',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
						}}>
						<motion.div className="ff-main fw-700 uppercase">
							Front-
							<br />
							end
							<br />
							developer
						</motion.div>
					</motion.div>
					<motion.div className="absolute text-container">
						<motion.p
							className="text"
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
							Hi, It's me, Lilian!
						</motion.p>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
