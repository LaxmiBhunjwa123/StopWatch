import React from "react";
import "./BtnComponent.css";

function BtnComponent(props){
    return(
        <div>
            {(props.status === 0)?
            <button className="stopeatch-btn stopwatch-btn-gre" onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
            <div>
                <button className="stopeatch-btn stopwatch-btn-red" onClick={props.stop}>Stop</button>
                <button className="stopeatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
            </div> : ""
            }

            {(props.status === 2)?
            <div>
                <button className="stopeatch-btn stopwatch-btn-gre" onClick={props.resume}>Resume</button>
                <button className="stopeatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
            </div> : ""
            }
        </div>
    )
}

export default BtnComponent;