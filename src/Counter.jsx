import React, { useEffect, useState } from "react";


function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-07-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      
      <span className="heading1">
        {timeLeft[interval]} {interval}
      </span>
      
    );
  });

  return (
    <div>
      <br/><br/>
      <h1 className="heading">
Our website will be Upload Soon.<br/>
Stay Tuned...</h1><br/>
      <h4 className="heading">Days Remaining!</h4>
      <br/><br/>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default CountdownTimer;