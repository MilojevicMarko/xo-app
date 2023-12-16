import React from 'react';

const Cell = ({ id, cell, cells, setCells, firstGo, setFirstGo, winner }) => {
	const handleGame = (e) => {
		let taken =
			e.target.firstChild.classList.contains('circle') ||
			e.target.firstChild.classList.contains('cross');

		if (!taken) {
			if (firstGo === 'circle') {
				e.target.firstChild.classList.add('circle');
				setFirstGo('cross');
				handleCellChange('circle');
			} else if (firstGo === 'cross') {
				e.target.firstChild.classList.add('cross');
				setFirstGo('circle');
				handleCellChange('cross');
			}
		}
	};

	const handleCellChange = (classList) => {
		let updateArrayCell = cells.map((el, index) => {
			if (index === id) {
				return classList;
			} else {
				return el;
			}
		});
		setCells(updateArrayCell);
	};

	return (
		<div
			className='square'
			id={id}
			onClick={!winner ? handleGame : null}>
			<div className={cell}></div>
		</div>
	);
};
export default Cell;
