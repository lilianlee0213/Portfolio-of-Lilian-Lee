import './style.css';
import {motion} from 'framer-motion';
import {teachingImg, goodTimesImg, vibesImg} from './stories';
import AnimatedText from '../AnimatedText/animatedText';
import Story from './Story';

export default function About() {
	return (
		<div className="section-wrapper">
			<section className="section section-heading">
				<div className="flex justify-space align-end h-100 fw-500 heading-text">
					<AnimatedText text="About"></AnimatedText>
					<AnimatedText text="Me"></AnimatedText>
				</div>
			</section>
			<section
				id="about"
				className="relative grid justify-center section section-about">
				<div className="about-image-container">
					<motion.div
						className="w-100 h-100 about-image"
						whileHover={{scale: 1.05}}></motion.div>
				</div>
				<div className="flex flex-col about-content-container">
					<div className="grid align-center about-content-stories-container">
						<p className="text-center">
							Wanna kwow who I am?
							<br />
							Chances are you'll find some answers here.
						</p>
						<div className="flex align-center justify-center about-content-stories">
							<Story
								imgArray={teachingImg}
								className="story-teaching"
								title="Work"
							/>
							<Story
								imgArray={teachingImg}
								className="story-teaching"
								title="🍎"
							/>
							<Story
								imgArray={goodTimesImg}
								className="story-goodTimes"
								title="Good times"
							/>
							<Story
								imgArray={vibesImg}
								className="story-vibes"
								title="Vibes"
							/>
						</div>
					</div>
					<div className="about-content-desc">
						<AnimatedText text="About Me" className="about-title" />
						<h1 className="about-bold-text">Hey, I'm Lilian!</h1>
						<p className="about-text">
							I am a former teacher turned <em>front-end developer</em>. My
							journey started with a simple desire to create, and along the way,
							I found a deep interest and excitement in building web
							applications.
						</p>
						<p className="about-text">
							I'm truly passionate about crafting captivating UI effects and
							animations that provide both entertainment and memorable user
							experiences. I'm excited to work alongside other amazing
							programmers and expand my skills and knowledge in the field!
						</p>
						<p className="about-text">
							Other than coding, I enjoy photography, hanging out with my
							friends, and playing PUBG and Animal Crossing.
						</p>
					</div>
					<div className="about-content-skills">
						<AnimatedText text="Skills" className="about-title" />
						<ul className="flex align-center skills">
							<li className="flex flex-col align-center skill">
								<i className="devicon-html5-plain colored"></i>
								Html
							</li>
							<li className="flex flex-col align-center skill">
								<i className="devicon-css3-plain colored"></i>
								CSS
							</li>
							<li className="flex flex-col align-center skill">
								<i className="devicon-javascript-plain colored"></i>
								Javascript
							</li>
							<li className="flex flex-col align-center skill">
								<i className="devicon-react-original colored"></i>
								React
							</li>
							<li className="flex flex-col align-center skill">
								<i className="devicon-typescript-plain colored"></i>
								Typescript
							</li>
							<li className="flex flex-col align-center skill">
								<i className="devicon-github-original"></i>
								Github
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
