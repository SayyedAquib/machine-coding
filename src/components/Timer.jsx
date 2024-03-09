// Problem Statement
// 1. Create a react component that displays a timer with initial value 0.
// 2. There should be two buttons one to start/stop, and other to reset timer.
// 3. Clicking on start will start timer from O and increase timer value by 1 for every second and button text should change to "stop".
// 4. Clicking on stop will pause the timer and change button text to "start".
// 5. Now click on start then timer should continue from paused value.
// 6. Clicking on reset will reset the timer to initial value 0.

import React, { useState, useEffect } from "react";

const Timer = () => {
  // State variables for timer value and running status
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle timer running and updating
  useEffect(() => {
    let intervalId;

    // Start timer if isRunning is true
    if (isRunning) {
      intervalId = setInterval(() => {
        // Increment timer value every second
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    // Cleanup function to clear interval when component unmounts or isRunning changes to false
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Handler to start/stop the timer
  const handleStartStop = () => {
    // Toggle isRunning status
    setIsRunning((prevState) => !prevState);
  };

  // Handler to reset the timer
  const handleReset = () => {
    // Reset timer value to 0 and stop the timer
    setTimer(0);
    setIsRunning(false);
  };

  // JSX rendering
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl mb-4">Timer: {timer}</h1>
      {/* Button to start/stop the timer */}
      <button
        onClick={handleStartStop}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 px-4 rounded ${
          isRunning ? "bg-red-500 hover:bg-red-700" : ""
        }`}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      {/* Button to reset the timer */}
      <button
        onClick={handleReset}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold w-20 py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
