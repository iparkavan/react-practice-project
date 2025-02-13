"use client";

import { useRouter } from "next/navigation";

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
  ];

  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
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
