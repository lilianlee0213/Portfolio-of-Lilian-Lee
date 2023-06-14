import {useRef, useState} from 'react';
import './style.css';
import {motion, useScroll, useTransform} from 'framer-motion';
export default function Home() {
	const cubeRef = useRef(null);
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const openBox = useTransform(scrollYProgress, [0, 0.3], [-500, 400]);

	return (
		<div className="section-wrapper">
			<section id="home" className="section section-1" ref={targetRef}>
				<div className=" h-100 ff-main section-1-container">
					<div className="sticky cube-container">
						<div ref={cubeRef} className="cube">
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
							<motion.div style={{left: openBox}} id="top" className="card">
								Top
							</motion.div>
							<div id="bottom" className="card">
								Bottom
							</div>
						</div>
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
