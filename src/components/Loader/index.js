import {motion} from 'framer-motion';
import './style.css';
export default function Loader(props) {
	return (
		<motion.div
			className="fixed flex justify-end align-end loader-container"
			initial={{height: '100%'}}
			animate={{
				height: props.isLoading ? '100%' : '0%',
				transition: {delay: 0.3, duration: 0.7},
			}}>
			<div className="loader">{props.percent}%</div>
		</motion.div>
	);
}
