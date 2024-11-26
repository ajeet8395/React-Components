import React, { useEffect, useState } from "react";

const StopTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => { 
        let intervalId;
        if(isRunning){
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }

        return () => {
            if(intervalId){
                clearInterval(intervalId)
            }
        }
    }, [isRunning])

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = (millisecond) => {
        const min = Math.floor(millisecond / 60000);
        const sec = Math.floor((millisecond % 60000) / 1000);
        const ms = Math.floor((millisecond % 1000) / 10);

        return `${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')} : ${ms.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center gap-8">
                <h1 className="text-center text-3xl font-semibold underline text-purple-900">STOPWATCH</h1>
                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="px-5 py-11 border rounded-full bg-red-500 text-white">{formatTime(time)}</p>
                    <div>
                        {(isRunning)? <button onClick={handleStartPause} className="border border-gray-400 px-4 py-1 rounded-sm bg-red-500 hover:bg-red-600 transition-all hover:border-red-600 text-white font-semibold">Pause</button> :  <button onClick={handleStartPause} className="border border-gray-400 px-4 py-1 rounded-sm bg-green-500 hover:bg-green-600 transition-all hover:border-green-600 text-white font-semibold">Start</button>}
                        <button onClick={handleReset} className="ml-4 border border-gray-400 px-4 py-1 rounded-sm bg-blue-500 hover:bg-blue-600 transition-all hover:border-blue-600 text-white font-semibold">Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StopTimer;