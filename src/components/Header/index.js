import React from 'react';
import {Link} from 'react-scroll';
import './style.css';
export default function Header() {
	return (
		<header className="fixed flex align-center header">
			<nav className="navbar">
				<ul className="flex nav-links">
					<li>
						<Link
							to="home"
							activeClass="scroll-active"
							smooth={true}
							spy={true}
							delay={300}
							duration={1000}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="work"
							activeClass="scroll-active"
							smooth={true}
							spy={true}
							delay={300}
							duration={1000}>
							Work
						</Link>
					</li>
					<li>
						<Link
							to="about"
							activeClass="scroll-active"
							smooth={true}
							spy={true}
							delay={300}
							duration={1000}>
							About
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							activeClass="scroll-active"
							smooth={true}
							spy={true}
							delay={300}
							duration={1000}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
