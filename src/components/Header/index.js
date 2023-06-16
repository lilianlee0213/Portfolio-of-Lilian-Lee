import React from 'react';
import {Link} from 'react-scroll';
import './style.css';
export default function Header() {
	return (
		<header className="fixed flex justify-space align-center header">
			<a href="/" className="ff-logo header-logo">
				Lilian Lee
			</a>
			<ul className="flex">
				<li>
					<Link activeClass="active" to="home">
						Home,
					</Link>
				</li>
				<li>
					<Link to="work">Work,</Link>
				</li>
				<li>
					<Link to="about">About</Link>
				</li>
			</ul>
		</header>
	);
}
