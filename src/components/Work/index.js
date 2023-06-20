import {useRef} from 'react';
import {motion, useMotionValueEvent} from 'framer-motion';
import {useScroll, useTransform} from 'framer-motion';
import './style.css';
import AnimatedText from '../AnimatedText/animatedText';
export default function Work() {
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const project2X = useTransform(scrollYProgress, [0.15, 0.3], ['0%', '-100%']);
	const project3X = useTransform(scrollYProgress, [0.35, 0.5], ['0%', '-100%']);
	const project4X = useTransform(scrollYProgress, [0.65, 0.8], ['0%', '-100%']);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log(latest);
	});
	return (
		<div className="section-wrapper">
			<section id="work" className="section work" ref={targetRef}>
				<motion.div className="sticky projects">
					<div className="absolute grid align-center h-100 project project-one">
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col justify-center project-content-container">
							<small className="project-index">01.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>html -</li>
									<li>css -</li>
									<li>javascript</li>
								</ul>
							</div>
							<AnimatedText text="Fictional" className="project-title" />
							<AnimatedText text="typeface" className="project-subtitle" />
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="flex uppercase project-links">
								<a href="">Live Site</a>
								<a href="">Github Repo</a>
							</div>
						</div>
					</div>
					<motion.div
						className="absolute grid align-center h-100 project project-two"
						style={{x: project2X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col justify-center project-content-container">
							<small className="project-index">02</small>
							<div className="project-skills">
								<ul className="flex">
									<li>html -</li>
									<li>css -</li>
									<li>javascript</li>
								</ul>
							</div>
							<AnimatedText text="ACNH Player" className="project-title" />
							<AnimatedText text="Music Player" className="project-subtitle" />
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="flex uppercase project-links">
								<a href="">Live Site</a>
								<a href="">Github Repo</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid align-center h-100 project project-three"
						style={{x: project3X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col justify-center project-content-container">
							<small className="project-index">03.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>html -</li>
									<li>css -</li>
									<li>javascript</li>
								</ul>
							</div>
							<AnimatedText text="Wetube" className="project-title" />
							<AnimatedText text="Youtube Clone" className="project-subtitle" />
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="flex uppercase project-links">
								<a href="">Live Site</a>
								<a href="">Github Repo</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid align-center h-100 project project-four"
						style={{x: project4X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col justify-center project-content-container">
							<small className="project-index">04.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>html -</li>
									<li>css -</li>
									<li>javascript</li>
								</ul>
							</div>
							<AnimatedText text="Netflix" className="project-title" />
							<AnimatedText text="Netflix Clone" className="project-subtitle" />
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="flex uppercase project-links">
								<a href="">Live Site</a>
								<a href="">Github Repo</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
