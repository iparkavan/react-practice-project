"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

const Page = () => {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  console.log(timer);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const timerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (/^\d*$/.test(value) && value.length <= 2) {
      setTimer((prevTimer) => ({ ...prevTimer, [name]: +value }));
    }
  };

  // const countDownStart = (tid: NodeJS.Timeout) => {
  //   setTimer((prevTimer) => {
  //     let { hours, minutes, seconds } = prevTimer;

  //     if (hours === 0 && minutes === 0 && seconds === 0) {
  //       clearInterval(tid);
  //       setIsTimerStart(false);
  //       return prevTimer;
  //     }

  //     if (seconds > 0) {
  //       seconds = seconds - 1;
  //     } else if (minutes > 0) {
  //       minutes--;
  //       seconds = 59;
  //     } else if (hours > 0) {
  //       hours--;
  //       minutes = 59;
  //       seconds = 59;
  //     }

  //     return { hours, minutes, seconds };
  //   });
  // };

  const countDownStart = (
    sec: number,
    min: number,
    hours: number,
    tid: NodeJS.Timeout
  ) => {
    if (sec > 0) {
      setTimer((prevTimer) => ({ ...prevTimer, seconds: sec - 1 }));
    } else if (min > 0) {
      setTimer((prevTimer) => ({
        ...prevTimer,
        minutes: min - 1,
        seconds: 59,
      }));
    } else if (hours > 0) {
      setTimer((prevTimer) => ({
        ...prevTimer,
        hours: hours - 1,
        minutes: 59,
        seconds: 59,
      }));
    } else {
      setTimer({ hours: 0, minutes: 0, seconds: 0 });
      setIsTimerStart(false);
      clearInterval(tid);
    }
  };

  useEffect(() => {
    let tid: NodeJS.Timeout;

    if (isTimerStart) {
      tid = setInterval(
        () => countDownStart(timer.seconds, timer.minutes, timer.hours, tid),
        1000
      );
      setTimerId(tid);
    } else if (timerId) {
      clearInterval(timerId);
    }

    return () => clearInterval(tid);
  }, [isTimerStart, timer]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      {/* Timer Input / Display */}
      <div className="flex items-center gap-4 bg-white p-6 rounded-xl border shadow-md">
        {Object.entries(timer).map(([key, value], index) => (
          <label
            key={index}
            className="text-gray-700 flex flex-col items-center"
          >
            <span className="text-sm font-semibold capitalize">{key}</span>
            {isTimerStart ? (
              <span className="w-12 h-12 text-2xl font-bold flex items-center justify-center text-gray-800">
                {value < 10 ? `0${value}` : value}
              </span>
            ) : (
              <input
                id={key}
                type="text"
                name={key}
                value={value}
                min={0}
                max={59}
                onChange={timerHandler}
                className="w-12 h-12 border rounded-lg flex items-center justify-center text-center text-xl font-medium shadow-sm"
              />
            )}
          </label>
        ))}
      </div>

      {/* Start / Stop Button */}
      <div className="mt-6">
        <button
          className={`px-6 py-3 rounded-lg text-white text-lg font-semibold transition ${
            isTimerStart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => setIsTimerStart(!isTimerStart)}
        >
          {isTimerStart ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Page;
