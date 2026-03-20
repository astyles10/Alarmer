import { useState } from 'react';

export default function App () {
  return (
    <>
      <Alarm />
      <br></br>
    </>
  );
}

export function Alarm() {
  return (
    <>
      {/* 'props' example: similar to Aurelia bindings. Set the value for each property in the html definition
          e.g. value1/2/3 propagate through to the Square component */}
      <BoardRow value1="Name" value2="Expiry Time" value3="Time until expiry"/>
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
  function clickHandler() {
    console.log('button %d clicked', value);
  }
  return <button onClick={clickHandler} className="square">{value}</button>;
}
