import React, {useState} from "react";
import DisplayComponent from "./component/DisplayComponent";
import BtnComponent from "./component/BtnComponent";
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0, started = 1, paus = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }

  var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run =() =>{
    if(updateM === 60){
      updateH++;
      updateM = 0;
    }
    if(updateS === 60){
      updateM++;
      updateS = 0;
    }
    if(updateMs === 100){
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  }
  
  const resume = () => start();

  return (
    <div className="main-section">
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponent time={time} />
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
        </div>
      </div>

    </div>
  );
}

export default App;
