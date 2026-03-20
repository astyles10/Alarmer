import { useState } from 'react';

export default function TicTacToe() {
  const [isXNext, setIsXNext] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let status;
  if (gameFinished) {
    status = "Game over.";
  } else {
    status = "Next player: " + (isXNext ? "X": "O");
  }

  function handleClick (i) {
    if (gameFinished) {
      return;
    }
    const nextSquares = squares.slice();
    if (nextSquares[i] === null) {
      nextSquares[i] = isXNext ? "X" : "O";
      setIsXNext(!isXNext);
      setSquares(nextSquares);
    }
    if (calculateWinner(nextSquares)) {
      console.log('Game finished');
      setGameFinished(true);
    }
  }

  return (
    <>
      <div className="status">{status}</div>
      <BoardRow value1={squares[0]} value2={squares[1]} value3={squares[2]} clickHandler={handleClick} squareIds={[0, 1, 2]}/>
      <BoardRow value1={squares[3]} value2={squares[4]} value3={squares[5]} clickHandler={handleClick} squareIds={[3, 4, 5]}/>
      <BoardRow value1={squares[6]} value2={squares[7]} value3={squares[8]} clickHandler={handleClick} squareIds={[6, 7, 8]}/>
    </>
  );
}

function BoardRow ({ value1, value2, value3, clickHandler, squareIds}) {
  return (
    <>
      <div className="board-row">
        <Square value={value1} clickHandler={() => clickHandler(squareIds[0])} />
        <Square value={value2} clickHandler={() => clickHandler(squareIds[1])} />
        <Square value={value3} clickHandler={() => clickHandler(squareIds[2])} />
      </div>
    </>
  );
}

function Square ({ value, clickHandler }) {
  return <button onClick={clickHandler} className="square">{value}</button>;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
}
