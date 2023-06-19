import './style.css';
export default function Work() {
	return (
		<div className="section-wrapper">
			<section id="work" className="sticky section">
				<div className="project-one">
					<div className="project-image-container">
						<div className="image image-one"></div>
						<div className="image image-two"></div>
						<div className="image image-three"></div>
					</div>
					<div className="project-container">
						<small className="project-index"></small>
						<h1 className="project-title">Fictional Typeface</h1>
						<p className="project-desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga
							id corporis officia eum tempora totam, quaerat natus atque
							asperiores laborum cum praesentium aperiam nihil perspiciatis
							voluptas sunt accusantium voluptates.
						</p>
						<div className="project-skills">
							<ul>
								<li>html</li>
								<li>css</li>
								<li>javascript</li>
							</ul>
						</div>
						<div className="project-links">
							<a href="">Github</a>
							<a href="">Live Demo</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
