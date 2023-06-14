import './styles/reset.css';
import './styles/globalStyles.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<main>
				<Home />
				<Work />
				<About />
			</main>
			<Footer />
		</div>
	);
}

export default App;
