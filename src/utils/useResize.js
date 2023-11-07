import { useEffect, useState } from 'react'


const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		handleResize();

		// setTimeout(() => handleResize(), 3000);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return width;
}

export default useResize;