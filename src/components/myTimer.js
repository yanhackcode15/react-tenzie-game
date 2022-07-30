import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function myTimer({days, hours, minutes, seconds, isRunning}) {
  

  return (
    <div className="timer">
      <div style={{fontSize: '8px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p style={{fontSize: '8px', marginLeft: '5px'}}>{isRunning ? 'Running' : 'Not running'}</p>
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}