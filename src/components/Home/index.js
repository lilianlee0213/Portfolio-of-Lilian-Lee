import {useRef, useState} from 'react';
import './style.css';
import {motion, useScroll, useTransform} from 'framer-motion';
export default function Home() {
	const cubeRef = useRef(null);
	const [isMoving, setIsMoving] = useState(false);
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
	const handleMouseDown = (event) => {
		setIsMoving(true);
		setMousePosition({x: event.clientX, y: event.clientY});
	};
	const handleMouseMove = (event) => {
		const rotateX = event.clientX - mousePosition.x / 4;
		const rotateY = event.clientY - mousePosition.y / 4;
		if (isMoving) {
			cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
			setMousePosition({x: event.clientX, y: event.clientY});
		} else return;
	};
	const handleMouseUp = () => {
		setIsMoving(false);
	};

	// const targetRef = useRef(null);
	// const {scrollYProgress} = useScroll({
	// 	target: targetRef,
	// 	offset: ['start end', 'end start'],
	// });
	// const y = useTransform(scrollYProgress, [0, 0.2], [220, 0]);
	// const textToRight = useTransform(scrollYProgress, [0, 0.4], [-500, 30]);
	// const textToLeft = useTransform(scrollYProgress, [0, 0.4], [500, -60]);
	return (
		<div className="section-wrapper">
			<section id="home" className="section section-1">
				<div className="h-100 ff-main section-1-container">
					<div className="absolute cube-container">
						<motion.div
							ref={cubeRef}
							className="cube"
							initial={{rotateX: 0, rotateY: 0}}
							animate={{
								rotateX: -20,
								rotateY: 25,
								transition: {
									duration: 1,
								},
							}}
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseUp}>
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
							<div id="top" className="card">
								Top
							</div>
							<div id="bottom" className="card">
								Bottom
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			{/* <motion.section ref={targetRef} className="section page-2">
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
			</motion.section> */}
			<section id="home" className="section section-home">
				Home
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
		</div>
	);
}
