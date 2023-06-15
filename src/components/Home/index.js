import {useEffect, useRef, useState} from 'react';
import './style.css';
import {
	clamp,
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
export default function Home() {
	const targetRef = useRef(null);
	const titleRef = useRef(null);
	const isInView = useInView(titleRef, {once: true});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const upboxY = useTransform(scrollYProgress, [0.25, 0.3], ['300%', '0%']);
	const rotateXBox = useTransform(scrollYProgress, [0.3, 0.6], [140, -410]);
	const rotateYBox = useTransform(scrollYProgress, [0.3, 0.6], [140, -410]);
	const openBox = useTransform(scrollYProgress, [0.6, 0.65], [0, 300]);
	const cardY = useTransform(scrollYProgress, [0.65, 0.7], [70, -350]);

	return (
		<div className="section-wrapper">
			<section id="home" className="section section-1" ref={targetRef}>
				<div className="sticky ff-main hero">
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
								<div className="photo-frame-image"></div>
								<div className="photo-frame-text">My Card1</div>
							</motion.div>
						</motion.div>
					</motion.div>
					<div className="absolute w-100 text-marquee">
						<div className="flex marquee">
							<p>Creative & Curious</p>
							<p>Creative & Curious</p>
							<p>Creative & Curious</p>
							<p>Creative & Curious</p>
							<p>Creative & Curious</p>
							<p>Creative & Curious</p>
						</div>
					</div>
					<motion.div
						ref={titleRef}
						className="absolute text-title"
						style={{
							transform: isInView ? 'none' : 'translateX(-200px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<h1 className="ff-main fw-700 uppercase">
							Front
							<br />
							-end
							<br />
							developer
						</h1>
					</motion.div>
				</div>
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
		</div>
	);
}
