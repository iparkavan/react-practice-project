"use client";

import Child from "@/components/child";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const router = useRouter();

  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);

  const routes = [
    {
      name: "Countdown Timer",
      route: "/countdown-timer",
    },
    {
      name: "Multistep Form",
      route: "/multisteps-form",
    },
    {
      name: "Add Input Fields",
      route: "/add-input-fields",
    },
    {
      name: "SSR & Server Actions",
      route: "/products",
    },
    {
      name: "EMI Calculater",
      route: "/emi-calculater",
    },
    {
      name: "Search Filter",
      route: "/search-filter",
    },
    {
      name: "Mouse Move",
      route: "/mouse-move",
    },
    {
      name: "OTP Verification",
      route: "/otp-verification",
    },
    {
      name: "Front End Pagination",
      route: "/front-end-pagination",
    },
    {
      name: "Back End Pagination",
      route: "/back-end-pagination",
    },
    {
      name: "Password Generator",
      route: "/password-generator",
    },
    {
      name: "Progress Bar",
      route: "/progress-bar",
    },
    {
      name: "Multi Select Search",
      route: "/multi-select-search",
    },
    {
      name: "CRUD Operation",
      route: "/crud-operation",
    },
    {
      name: "Folder File Structure",
      route: "/folder-file-structure",
    },
    {
      name: "Stepper Component",
      route: "/stepper-component",
    },
    {
      name: "Auto Complete Suggestion",
      route: "/auto-complete-suggestion",
    },
  ];

  // const handleClick = useCallback(() => {
  //   setValue((prev) => prev - 1);
  // }, []);

  // const expensiveCalculation = (num: number) => {
  //   console.log("Expensive calculation performed");
  //   for (let i = 0; i < 1e8; i++) {
  //     return num * 2;
  //   }
  // };

  // const result = useEffect(() => {
  //   expensiveCalculation(count);
  // }, [count]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* <div>
        <button
          className="primary-btn"
          onClick={() => setValue((prev) => prev + 1)}
        >
          value change
        </button>
        <Child value={value} onClick={handleClick} />
        <button
          className="primary-btn"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <p>Count: {result}</p>
      </div> */}
      {routes.map((route, index) => (
        <div key={index}>
          <button
            className="primary-btn"
            onClick={() => router.push(`${route.route}`)}
          >
            {route.name}
          </button>
        </div>
      ))}
    </div>
  );
}
