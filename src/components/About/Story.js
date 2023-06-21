export default function Story() {
	return (
		<>
			<div className="story story-projects">
				<div className="story-cover">
					<div className="story-cover-image"></div>
				</div>
				<div className="text-center story-title">Projects</div>
				<div className="absolute story-modals">
					<div className="absolute grid story-modal-progress">
						<div className="story-modal-progress-bar"></div>
						<div className="story-modal-progress-bar"></div>
						<div className="story-modal-progress-bar"></div>
					</div>
					<div className="h-100 story-modal">
						<div className="story-modal-image"></div>
					</div>
				</div>
			</div>
		</>
	);
}
