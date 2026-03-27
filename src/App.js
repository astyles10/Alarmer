import { useRef, useState } from 'react';
import { Button, Card, CardBody, CardFooter } from '@react-ui-org/react-ui';
import '@react-ui-org/react-ui/dist/react-ui.css';

export default function App() {
  return (
    <>
      <Alarm />
      <br></br>
      <AlarmCard timerName={"My Timer"}>
      </AlarmCard>
    </>
  );
}

export function Alarm() {
  return (
    <>
      {/* 'props' example: similar to Aurelia bindings. Set the value for each property in the html definition
          e.g. value1/2/3 propagate through to the Square component */}
      <BoardRow value1="Name" value2="Expiry Time" value3="Time until expiry" />
    </>
  );
}

function BoardRow({ value1, value2, value3 }) {
  return (
    <>
      <div className="board-row">
        <Square value={value1} />
        <Square value={value2} />
        <Square value={value3} />
      </div>
    </>
  );
}

function Square({ value }) {
  function clickHandler() {
    console.log('button %d clicked', value);
  }
  return <button onClick={clickHandler} className="square">{value}</button>;
}
// Look at this https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/

export function AlarmCard({ timerName }) {
  const [timerIntervalId, setTimerIntervalId] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const timerLengthMins = useRef(0);
  function determineTimerEnd() {
    let now = new Date().getTime(); // now = milliseconds, hence conversion from minutes = diff * 60000
    let endTime = new Date(now + timerLengthMins * 60000);
    return endTime
  }

  const decrementTimer = () => {
    setTimeRemaining(time => time - 1);
    // console.log("set timer to", timeRemaining);
    if (timeRemaining === 0) {
      console.log("clearing timer");
      clearInterval(timerIntervalId);
    }
  }

  const startTimer = () => {
    if (timerIntervalId === null) {
      let timerLength = Number(timerLengthMins.current.value);
      if (Number.isNaN(timerLength) || !timerLength || timerLength === 0) {
        return;
      }
      let timerLengthSeconds = timerLength * 60;
      setTimeRemaining(timerLengthSeconds);
      console.log("set timer to", timeRemaining);
      setTimerIntervalId(setInterval(decrementTimer, 1000));
    }
    return () => clearInterval(timerIntervalId);
  }

  const stopTimer = () => {
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
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
          <input type="number" ref={timerLengthMins} placeholder="mins"></input>
          <br></br>
          Time Remaining: {timeRemaining}
        </CardBody>
        <CardFooter>
          <Button onClick={startTimer} label="Start Timer" priority="outline"></Button>
          <Button onClick={stopTimer} label="Stop Timer" priority="outline"></Button>
        </CardFooter>
      </Card>
    </div>
  )
}
