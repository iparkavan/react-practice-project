"use client";

import Circle from "@/components/machine-coding/circle";
import React, { MouseEvent, useRef } from "react";

const page = () => {
  const mouseRef = useRef(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   moveRef.current?.addEventListener("mousemove", () => console.log("Hoverd"));

  //   return () =>
  //     moveRef.current?.removeEventListener("mousemove", () =>
  //       console.log("done")
  //     );
  // }, []);

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    const circle = circleRef.current;
    if (circle) {
      let circleSize = 48;
      setTimeout(() => {
        circle.style.left = `${e.clientX - circleSize / 2}px`;
        circle.style.top = `${e.clientY - circleSize / 2}px`;
      }, 100);
    }
    console.log("hovered", e);
  };

  //   console.log("circleRef", circleRef);

  return (
    <div
      onMouseMove={
        (e) => mouseMoveHandler(e)
        // circleRef.current?.style.setProperty(
        //   "transform",
        //   `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`
        // )
      }
      className="w-screen h-screen relative"
    >
      <div
        ref={circleRef}
        className="w-12 h-12 absolute rounded-full bg-green-500"
      />
      {/* <Circle ref={circleRef} /> */}
    </div>
  );
};

export default page;
