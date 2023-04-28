import React, { useRef, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const refrence = useRef();

  const start = () => {
    refrence.current = setInterval(() => {
      setTimer((previous) => {
        return previous + 1;
      });

      // setInterval(() => {

      //     setTimer(timer + 1)
      // },1000)
    }, 1000);
  };

  const stop = () => {
    clearInterval(refrence.current);
  };

  const reset = () => {
    setTimer(0);
  };
  
  return (
    <div style={timer % 2 === 0 ? {boxShadow:"0 0 10px green"} : {boxShadow:"0 0 10px red"}} className="timer">
      <h1>Timer: {timer}</h1>

      <div className="buttonContainer">

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
