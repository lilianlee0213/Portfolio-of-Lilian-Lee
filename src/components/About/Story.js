import {useEffect, useState} from 'react';
import teaching1 from '../../images/stories/teaching1.jpg';
import teaching2 from '../../images/stories/teaching2.jpg';
import teaching3 from '../../images/stories/teaching3.jpg';
import {motion} from 'framer-motion';
const teachingImg = [teaching1, teaching2, teaching3];

const progressbarVariant = {
	initial: {
		width: '0%',
	},
	animate: {
		width: ['0%', '25%', '50%', '75%', '100%'],
		transition: {duration: 5, ease: 'linear'},
	},
};
export default function Story() {
	const [counter, setCounter] = useState(0);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [allViewed, setAllViewed] = useState(false);
	useEffect(() => {
		const background = document.querySelector('.story-modal-image');
		if (isModalOpened) {
			const timer = setTimeout(() => {
				moveNextStory(background);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [isModalOpened, counter]);

	const handleStoryClick = () => {
		setIsModalOpened(true);
	};

	const handleStoryExit = () => {
		setIsModalOpened(false);
	};

	const moveNextStory = (background) => {
		if (counter < teachingImg.length - 1) {
			setCounter((prev) => prev + 1);
			const nextBackground = teachingImg[counter + 1];
			background.style.backgroundImage = `url('${nextBackground}')`;
		} else {
			setIsModalOpened(false);
			setCounter(teachingImg.length - 1);
			setAllViewed(true);
		}
	};
	const handleModalClick = (event) => {
		const width = event.target.offsetWidth;
		const clickX = event.clientX - event.target.getBoundingClientRect().left;
		const isLeftSideClicked = clickX <= width / 2;
		if (isLeftSideClicked) {
			// movePrevStory
			if (counter > 0) {
				setCounter((prev) => prev - 1);
				const prevBackground = teachingImg[counter - 1];
				event.target.style.backgroundImage = `url('${prevBackground}')`;
			}
		} else {
			moveNextStory(event.target);
		}
	};

	return (
		<div className="story story-projects">
			<div
				className="story-cover"
				onClick={handleStoryClick}
				style={{opacity: allViewed ? 0.6 : 1}}>
				<div className="story-cover-image"></div>
			</div>
			<div className="text-center story-title">Projects</div>
			<div
				className="absolute story-modal-container"
				style={{display: isModalOpened ? 'block' : 'none'}}>
				<div className="absolute grid story-modal-progress">
					{teachingImg.map((img, index) => (
						<div className="story-modal-progress-bar" key={index}>
							{counter === index && (
								<motion.span
									initial="initial"
									animate="animate"
									variants={progressbarVariant}
								/>
							)}
						</div>
					))}
				</div>
				<div className="h-100 story-modal" onClick={handleModalClick}>
					<div className="story-modal-image"></div>
				</div>
			</div>
			<div
				className="story-overlay"
				onClick={handleStoryExit}
				style={{display: isModalOpened ? 'block' : 'none'}}></div>
		</div>
	);
}