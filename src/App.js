import { useState } from 'react';
import { Button, Card, CardBody, CardFooter } from '@react-ui-org/react-ui';
import '@react-ui-org/react-ui/dist/react-ui.css';

export default function App () {
  return (
    <>
      <Alarm />
      <br></br>
      <AlarmCard timerName={"My Timer"} timerLengthMins={15}>
      </AlarmCard>
      <AlarmCard timerName={"My Timer 2"} timerLengthMins={8}>
      </AlarmCard>
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

export function AlarmCard({ timerName, timerLengthMins }) {
  const [timerEnd, setTimerEnd] = useState(0);
  function determineTimerEnd() {
    let now = new Date().getTime(); // now = milliseconds, hence conversion from minutes = diff * 60000
    let endTime = new Date(now + timerLengthMins*60000);
    return endTime
  }
  function startTimer() {
    // let x = setInterval(function())
    setTimerEnd(determineTimerEnd().toLocaleString());
  }
  return (
    <div style={{
      display: 'flex',
      width: '800px'
    }}
    >
      <Card raised>
        <CardBody>
          {timerName}
          <br></br>
          Time Remaining: {timerEnd}
        </CardBody>
        <CardFooter>
          <Button onClick={startTimer} label="Cancel Timer" priority="outline"></Button>
        </CardFooter>
      </Card>
    </div>
  )
}
