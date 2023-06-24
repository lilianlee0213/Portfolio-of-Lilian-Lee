import React from 'react';
import {Link} from 'react-scroll';
import './style.css';
export default function Header() {
	return (
		<header className="fixed flex justify-end align-center header">
			<nav className="navbar">
				<ul className="flex nav-links">
					<li>
						<Link to="home">Home</Link>
					</li>
					<li>
						<Link to="work">Work</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
