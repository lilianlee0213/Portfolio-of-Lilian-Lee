import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

const progressbarVariant = {
	initial: {
		width: '0%',
	},
	animate: {
		width: ['0%', '25%', '50%', '75%', '100%'],
		transition: {duration: 5, ease: 'linear'},
	},
};
export default function Story(props) {
	const [counter, setCounter] = useState(0);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [allViewed, setAllViewed] = useState(false);
	const backgroundRef = useRef(null);

	useEffect(() => {
		const background = backgroundRef.current;
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
		if (counter < props.imgArray.length - 1) {
			setCounter((prev) => prev + 1);
			const nextBackground = props.imgArray[counter + 1];
			background.style.backgroundImage = `url('${nextBackground}')`;
		} else {
			setIsModalOpened(false);
			setCounter(props.imgArray.length - 1);
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
				const prevBackground = props.imgArray[counter - 1];
				event.target.style.backgroundImage = `url('${prevBackground}')`;
			}
		} else {
			moveNextStory(event.target);
		}
	};

	return (
		<div className={`story ${props.className}`}>
			<div
				className="story-cover"
				onClick={handleStoryClick}
				style={{opacity: allViewed ? 0.6 : 1}}>
				<div className="story-cover-image"></div>
			</div>
			<div className="text-center story-title">{props.title}</div>
			<div
				className="absolute story-modal-container"
				style={{display: isModalOpened ? 'block' : 'none'}}>
				<div className="absolute flex story-modal-progress">
					{props.imgArray.map((img, index) => (
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
					<div className="story-modal-image" ref={backgroundRef}></div>
				</div>
			</div>
			<div
				className="story-overlay"
				onClick={handleStoryExit}
				style={{display: isModalOpened ? 'block' : 'none'}}></div>
		</div>
	);
}
