import { useState } from 'react';
import Cell from './components/Cell';

function App() {
	const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
	const [firstGo, setFirstGo] = useState('circle'); //circle play first
	const [winner, setWinner] = useState(null);
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
							firstGo={firstGo}
							setFirstGo={setFirstGo}
							winner={winner}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
