import { useState } from 'react';
import TicTacToe from './TicTacToe';

export default function App () {
  return (
    <>
      <NumberedBoard />
      <br></br>
      <TicTacToe />
    </>
  );
}

export function NumberedBoard() {
  return (
    <>
      {/* 'props' example: similar to Aurelia bindings. Set the value for each property in the html definition
          e.g. value1/2/3 propagate through to the Square component */}
      <BoardRow value1="1" value2="2" value3="3"/>
      <BoardRow value1="4" value2="5" value3="6"/>
      <BoardRow value1="7" value2="8" value3="9"/>
    </>
  );
}

function BoardRow ({ value1, value2, value3 }) {
  return (
    <>
      <div className="board-row">
        <Square value={value1}/>
        <Square value={value2}/>
        <Square value={value3}/>
      </div>
    </>
  );
}

function Square ({ value }) {
  // const [value, setValue] = useState(null);
  function clickHandler() {
    console.log('button %d clicked', value);
  }
  return <button onClick={clickHandler} className="square">{value}</button>;
}
