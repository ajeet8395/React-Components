// Create a stopwatch application through which users can start, pause and reset the timer.
// Use React state, event handlers and the setTimeout or setInterval functions to manage the timer’s state and actions.
import React, { useState, useRef, useEffect } from "react";

const StopTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning])

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false)
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const min = Math.floor(milliseconds/60000);
    const sec = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2,"0")}:${ms.toString().padStart(2,"0")}`
  };

  return (
    <>
      <div>
        <h1>Stop Watch</h1>
        <p>{formatTime(time)}</p>
        {(isRunning)? <button onClick={handleStartPause}>Pause</button> : <button onClick={handleStartPause}>Start</button>}
        
        
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default StopTimer;
