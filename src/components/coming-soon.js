import React, { useEffect, useState } from "react";
import "./coming-soon.css";

export default function Props() {
  const countDownDate = new Date("Jan 1, 2023 12:12:12").getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className="page">
      <div className="countdown-col col">
        <div className="middle">
          <h2>Coming Soon</h2>
        </div>
        <div className="time middle2">
          <span>
            <div id="days">{days}</div> Days
          </span>
          <span>
            <div id="hours">{hours}</div> Hours
          </span>
          <span>
            <div id="minutes">{minutes}</div> Minutes
          </span>
          <span>
            <div id="seconds">{seconds}</div> Seconds
          </span>
        </div>
      </div>
      {/* <div className="newsletter-col col">
        <div className="newslatter middle">
          <h2>Coming Soon</h2>
          <h4>Subscribe to get notification when we start</h4>
          <form>
            <input type="text" placeholder="Enter Your Email" />
            <button type="button" className="newslatter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}
