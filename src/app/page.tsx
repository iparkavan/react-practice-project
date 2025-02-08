"use client";

import Image from "next/image";
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
