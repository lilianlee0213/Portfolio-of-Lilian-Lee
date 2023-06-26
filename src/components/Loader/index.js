import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import './style.css';
export default function Loader() {
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
		<motion.div
			className="fixed flex justify-end align-end loader-container"
			initial={{height: '100%'}}
			animate={{
				height: isLoading ? '100%' : '0%',
				transition: {delay: 0.3, duration: 0.7},
			}}>
			<div className="loader">{percent}%</div>
		</motion.div>
	);
}
