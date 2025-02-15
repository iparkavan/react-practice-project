"use client";

import Circle from "@/components/machine-coding/circle";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();

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
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
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
