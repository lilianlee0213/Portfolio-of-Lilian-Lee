import './styles/reset.css';
import './styles/utilities.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';
import {useEffect, useState} from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [percent, setPercent] = useState(0);
	useEffect(() => {
		setIsLoading(true);
		let currentPercent = 0;
		const interval = setInterval(() => {
			currentPercent += 1;
			setPercent(currentPercent);
			if (currentPercent === 100) {
				clearInterval(interval);
				setIsLoading(false);
			}
		}, 40);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader percent={percent} isLoading={isLoading} />
			) : (
				<>
					<Header />
					<>
						<Home />
						<Work />
						<About />
						<Contact />
					</>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
