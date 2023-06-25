import './style.css';
export default function Footer() {
	return (
		<footer className="flex justify-center align-center">
			<p>&copy; Lilian Lee {new Date().getFullYear()}</p>
		</footer>
	);
}
