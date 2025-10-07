import React from 'react';

const useScreenWidth = () => {
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { width };
};

export default useScreenWidth;