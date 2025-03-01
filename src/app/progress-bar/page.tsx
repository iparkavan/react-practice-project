"use client";

import ProgressBar from "@/features/progress-bar/ProgressBar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setInterval(() => setValue((prev) => prev + 1), 10);
  }, []);

  return (
    <div className="text-center">
      <span className="">Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => setSuccess("It is successfully completed")}
      />
      <span>{success ? success : "Loading..."}</span>
    </div>
  );
};

export default page;
