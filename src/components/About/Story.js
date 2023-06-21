import {useState} from 'react';
import teaching1 from '../../images/stories/teaching1.jpg';
import teaching2 from '../../images/stories/teaching2.jpg';
import teaching3 from '../../images/stories/teaching3.jpg';

const teachingImg = [teaching1, teaching2, teaching3];

export default function Story() {
	const [counter, setCounter] = useState(0);
	const [isViewing, setIsViewing] = useState(false);
	const handleStoryClick = () => {
		setIsViewing(true);
	};
	const handleStoryExit = () => {
		setIsViewing(false);
	};
	const handleModalClick = (event) => {
		const width = event.target.offsetWidth;
		const clickX = event.clientX - event.target.getBoundingClientRect().left;
		const isLeftSideClicked = clickX <= width / 2;
		if (isLeftSideClicked) {
			if (counter > 0) {
				setCounter((prev) => prev - 1);
				const prevBackground = teachingImg[counter - 1];
				event.target.style.backgroundImage = `url('${prevBackground}')`;
			}
		} else {
			if (counter < teachingImg.length - 1) {
				setCounter((prev) => prev + 1);
				const nextBackground = teachingImg[counter + 1];
				event.target.style.backgroundImage = `url('${nextBackground}')`;
			}
		}
	};
	return (
		<div className="story story-projects">
			<div className="story-cover" onClick={handleStoryClick}>
				<div className="story-cover-image"></div>
			</div>
			<div className="text-center story-title">Projects</div>
			<div
				className="absolute story-modal-container"
				style={{display: isViewing ? 'block' : 'none'}}>
				<div className="absolute grid story-modal-progress">
					<div className="story-modal-progress-bar"></div>
					<div className="story-modal-progress-bar"></div>
					<div className="story-modal-progress-bar"></div>
				</div>
				<div className="h-100 story-modal" onClick={handleModalClick}>
					<div className="story-modal-image"></div>
				</div>
			</div>
			<div
				className="story-overlay"
				onClick={handleStoryExit}
				style={{display: isViewing ? 'block' : 'none'}}></div>
		</div>
	);
}
