import React, { useEffect, useState } from "react";

function useBackgroundProcess() {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
    const intervalId = setInterval(() => {
      console.log("Background process running");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      setIsRunning(false);
    };
  }, []);

  const startBackgroundProcess = () => {
    setIsRunning(true);
  };

  const stopBackgroundProcess = () => {
    setIsRunning(false);
  };

  return { isRunning, startBackgroundProcess, stopBackgroundProcess };
}

function App() {
  const { isRunning, startBackgroundProcess, stopBackgroundProcess } =
    useBackgroundProcess();

  return (
    <div>
      <button onClick={isRunning ? stopBackgroundProcess : startBackgroundProcess}>
        {isRunning ? "Stop Background Process" : "Start Background Process"}
      </button>
    </div>
  );
}

export default App;