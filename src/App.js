import './styles/reset.css';
import './styles/utilities.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
	return (
		<div>
			<Header />
			<>
				<Home />
				<Work />
				<About />
				<Contact />
			</>
			<Footer />
			<Loader />
		</div>
	);
}

export default App;
