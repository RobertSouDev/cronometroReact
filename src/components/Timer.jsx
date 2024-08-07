import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";

import { useState, useEffect } from "react";

import "./Timer.css";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formaTime = () => {
    const minutes = ("0" + (Math.floor(milliseconds / 60000) % 60)).slice(-2);
    const secunds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);

    const centirseconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(
      -2
    );

    return `${minutes} :${secunds}: ${centirseconds}`
  };

  const startTimer = (interval) => {
        return setInterval(()=>{
            setMilliseconds(prevMillliseconds => prevMillliseconds + 10)
        },10)
  }

  const  stopTimer = (interval) => {
    
  }

  useEffect(()=> {
    let  interval = null;
    
    if (timerOn){
        interval = startTimer(interval)
    } else {
        interval = stopTimer(interval)
    }
  })

  return (
    <div className="timer-container">
      <TimerDisplay time={formaTime()} />
      <TimerControls onStart={() => setTimerOn(true)} onStop={()=> setTimerOn(false)} />
      <LapList />
    </div>
  );
};

export default Timer;
