import './style.css';
import {motion} from 'framer-motion';
import {teachingImg, goodTimesImg, vibesImg} from './stories';
import AnimatedText from '../AnimatedText/animatedText';
import Story from './Story';

export default function About() {
	return (
		<div className="section-wrapper">
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
						<p>
							Wanna kwow who I am? Chances are you'll find some answers here.
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
						<p className="fw-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							repellendus, perferendis praesentium aspernatur, quisquam nam
							molestias pariatur reprehenderit magnam eos minus ab maiores autem
							asperiores tempore quidem explicabo dicta laboriosam.
						</p>
					</div>
					<div className="about-content-skills">
						<AnimatedText text="Skills" className="about-title" />
						<ul className="flex align-center skills">
							<li className="flex flex-col align-center skill">
								<i className="fa-brands fa-html5"></i>
								Html
							</li>
							<li className="flex flex-col align-center skill">
								<i className="fa-brands fa-css3-alt"></i>
								CSS
							</li>
							<li className="flex flex-col align-center skill">
								<i className="fa-brands fa-square-js"></i>
								Javascript
							</li>
							<li className="flex flex-col align-center skill">
								<i className="fa-brands fa-react"></i>
								React
							</li>
							<li className="flex flex-col align-center skill">
								<i className="fa-brands fa-github"></i>
								Github
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
