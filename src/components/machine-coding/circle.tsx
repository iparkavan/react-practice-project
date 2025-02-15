import React, { forwardRef } from "react";

const Circle = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="w-12 absolute h-12 rounded-full bg-green-500" ref={ref} />
  );
});

export default Circle;
