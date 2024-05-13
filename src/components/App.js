import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div>
      {/* Do not remove the main div */}
      {/* <p>You\'ve been on this page for 0 seconds.</p> */}
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
}

export default App;
