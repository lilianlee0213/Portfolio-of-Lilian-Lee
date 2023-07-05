import {useRef} from 'react';
import {motion} from 'framer-motion';
import {useScroll, useTransform} from 'framer-motion';
import './style.css';
import AnimatedText from '../AnimatedText/animatedText';
export default function Work() {
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const project2X = useTransform(
		scrollYProgress,
		[0.15, 0.35],
		['0%', '-100%']
	);
	const project3X = useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-100%']);
	const project4X = useTransform(
		scrollYProgress,
		[0.65, 0.85],
		['0%', '-100%']
	);
	const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
	return (
		<>
			<section className="section section-heading">
				<div className="flex justify-space align-end h-100 fw-500 heading-text">
					<AnimatedText text="Selected"></AnimatedText>
					<AnimatedText text="Work"></AnimatedText>
				</div>
			</section>
			<motion.section
				id="work"
				className="section work"
				ref={targetRef}
				style={{opacity}}>
				<motion.div className="sticky projects">
					<div className="absolute grid h-100 project project-one">
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col project-content-container">
							<small className="project-index">01.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>html |</li>
									<li>css |</li>
									<li>javascript</li>
								</ul>
							</div>
							<AnimatedText text="Fictional" className="project-title" />
							<ul className="project-desc">
								<li>
									Constructed a website using only HTML, CSS, and JavaScript,
									taking inspiration from an existing{' '}
									<em>"Fictional Typeface"</em> website.
								</li>
								<li>
									Created a <em>"Select Mode"</em> to explore the various font
									sizes and appearance.
								</li>
								<li>
									Developed <em>"Text Mode"</em> for users to directly edit and
									use the font.
								</li>
								<li>
									Built a fun shooting game called <em>"Fire Mode"</em> that
									users can shoot text element.
								</li>
							</ul>
							<div className="flex uppercase project-links">
								<a
									href="https://fictional-typeface-clone-by-lilianlee.netlify.app/"
									target="_blank"
									rel="noopener noreferrer">
									Live Site
								</a>
								<a
									href="https://github.com/lilianlee0213/fictional-typeface"
									target="_blank"
									rel="noopener noreferrer">
									Github Repo
								</a>
							</div>
						</div>
					</div>
					<motion.div
						className="absolute grid h-100 project project-two"
						style={{x: project2X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col project-content-container">
							<small className="project-index">02.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>React |</li>
									<li>React Query |</li>
									<li>Rest Api</li>
								</ul>
							</div>
							<AnimatedText text="ACNH Player" className="project-title" />
							<ul className="project-desc">
								<li>
									Retrieved music data using the Animal Crossing New
									Horizons(ACNH) free RESTful API
								</li>
								<li>
									Allowed users to discover various music with top songs and
									recommended songs by ACNH popular villagers
								</li>
								<li>
									Built a music player with play, pause, and timeline control
									features
								</li>
								<li>
									Designed the interface with a vibe reminiscent of Animal
									Crossing
								</li>
							</ul>
							<div className="flex uppercase project-links">
								<a
									href="https://lilianlee0213.github.io/ACNH-player/"
									target="_blank"
									rel="noopener noreferrer">
									Live Site
								</a>
								<a
									href="https://github.com/lilianlee0213/ACNH-player"
									target="_blank"
									rel="noopener noreferrer">
									Github Repo
								</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid h-100 project project-three"
						style={{x: project3X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col project-content-container">
							<small className="project-index">03.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>Pug |</li>
									<li>SCSS |</li>
									<li>NodeJS |</li>
									<li>MongoDB |</li>
									<li>Express</li>
								</ul>
							</div>
							<AnimatedText text="Wetube" className="project-title" />
							<ul className="project-desc">
								<li>
									Created models for videos, user information, comments using
									Mongoose and stored them in MongoDB
								</li>
								<li>
									Implemented user registration and login/logout with GitHub
									using the OAuth authentication
								</li>
								<li>
									Allowed users to upload, edit, delete, and search videos
								</li>
								<li>
									Real-time comments that users can create, edit and delete
								</li>
							</ul>
							<div className="flex uppercase project-links">
								<a
									href="https://wetube-clone.herokuapp.com/"
									rel="noopener noreferrer">
									Live Site
								</a>
								<a
									href="https://github.com/lilianlee0213/wetube-reloaded"
									rel="noopener noreferrer">
									Github Repo
								</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid h-100 project project-four"
						style={{x: project4X}}>
						<div className="project-image-container">
							<div className="image"></div>
						</div>
						<div className="flex flex-col project-content-container">
							<small className="project-index">04.</small>
							<div className="project-skills">
								<ul className="flex">
									<li>React -</li>
									<li>React Query -</li>
									<li>Typescript-</li>
									<li>Rest Api</li>
								</ul>
							</div>
							<AnimatedText text="Nomflix" className="project-title" />
							<ul className="project-desc">
								<li>
									Information on movies/tvs pulled from{' '}
									<em>Movie Database(TMDB)</em> API
								</li>
								<li>
									Users can easily search for specific movies or TV shows and
									explore various categories such as "Now Playing", "Popular",
									and "Top Rated".
								</li>
								<li>
									Incorporated engaging animations and interactive features like
									sliders and modals using Framer Motion
								</li>
							</ul>
							<div className="flex uppercase project-links">
								<a
									href="https://lilianlee0213.github.io/netflix-clone/"
									target="_blank"
									rel="noopener noreferrer">
									Live Site
								</a>
								<a
									href="https://github.com/lilianlee0213/netflix-clone"
									target="_blank"
									rel="noopener noreferrer">
									Github Repo
								</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</>
	);
}
