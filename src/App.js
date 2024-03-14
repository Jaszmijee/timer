import './styles/global.scss';
import React, {useState} from 'react';
import Timer from "./components/timer/Timer";
import Button from "./components/button/Button";

function App() {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleStart = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
            });
            setIntervalId(id);
        }
    };

    const handleStop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const handleReset = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setElapsedTime(0);
    };

    return (
        <div className="app">
            <div className="container">
                <Timer elapsedTime={elapsedTime}/>
                <div className="button-row">
                    <Button onClick={handleStart}>Start</Button>
                    <Button onClick={handleStop}>Stop</Button>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
            </div>
        </div>
    );
}


export default App;
