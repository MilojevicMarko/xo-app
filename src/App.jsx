import { useEffect, useState } from 'react';
import Cell from './components/Cell';

function App() {
	const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
	const [firstGo, setFirstGo] = useState('circle'); //circle play first
	const [winner, setWinner] = useState(null);

	let checkArray = cells.every((cell) => cell !== '');

	useEffect(() => {
		chechWinner();
	}, [cells]);

	const chechWinner = () => {
		const winnerCombination = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		winnerCombination.forEach((comb) => {
			let crossWinner = comb.every((cell) => cells[cell] === 'cross');
			let circleWinner = comb.every((cell) => cells[cell] === 'circle');

			if (crossWinner) {
				setWinner('Winner is Cross!');
				return;
			} else if (circleWinner) {
				setWinner('Winner is Cicrle');
				return;
			} else if (checkArray) {
				setWinner('We dont have a winner!');
			}
		});
	};

	const handleResetGame = () => {
		if (winner || checkArray) {
			let emptyArray = new Array(9).fill('');
			setCells(emptyArray);
			setWinner(null);
		}
	};
	return (
		<div className='app'>
			<h1 className='title'>XO Game</h1>
			<div className='squareContainer'>
				{cells.map((cell, id) => {
					return (
						<Cell
							key={id}
							id={id}
							cell={cell}
							setCells={setCells}
							cells={cells}
							firstGo={firstGo}
							setFirstGo={setFirstGo}
							winner={winner}
						/>
					);
				})}
			</div>
			<button
				type='submit'
				onClick={handleResetGame}>
				Reset Game
			</button>
			{winner && <h2>{winner}</h2>}
		</div>
	);
}

export default App;
