import React from 'react';

const Cell = ({ id, cell, setCells, firstGo, setFirstGo, winner }) => {
	const handleGame = (e) => {
		let taken =
			e.target.firstChild.classList.contains('circle') ||
			e.target.firstChild.classList.contains('cross');

		if (!taken) {
			if (firstGo === 'circle') {
				e.target.firstChild.classList.add('circle');
				setFirstGo('cross');
			} else if (firstGo === 'cross') {
				e.target.firstChild.classList.add('cross');
				setFirstGo('circle');
			}
		}
	};
	return (
		//TODO:
		<div
			className='square'
			id={id}
			onClick={handleGame}>
			<div className={cell}></div>
		</div>
	);
};

export default Cell;
