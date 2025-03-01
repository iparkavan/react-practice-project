import React, { useEffect, useState } from "react";

const ProgressBar = ({
  value = 0,
  onComplete,
}: {
  value: number;
  onComplete: () => void;
}) => {
  const MIN = 0;
  const MAX = 100;

  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));

    if (value > MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="w-[600px] relative border-2 rounded-lg h-8 overflow-hidden">
      <span
        className={`absolute top-[50%] left[50%] translate-x-[-50%] translate-y-[-50%] z-10 ${
          percent < 49 ? "" : "text-white"
        }`}
      >
        {percent.toFixed()}%
      </span>
      <div
        className={`h-8 bg-green-500`}
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={parseFloat(percent.toFixed())}
      />
    </div>
  );
};

export default ProgressBar;
