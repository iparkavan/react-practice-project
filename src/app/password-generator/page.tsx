"use client";

import { getPasswordStrength } from "@/features/password-generator/components/password-indicator";
import usePasswordGenerator from "@/features/password-generator/hooks/use-password-generator";
import React, { ChangeEvent, useState } from "react";

export type CheckboxDataTypes = {
  title: string;
  state: boolean;
};

const checkboxData: CheckboxDataTypes[] = [
  { title: "Include Uppercase Letters", state: false },
  { title: "Include Lowercase Letters", state: false },
  { title: "Include Numbers", state: false },
  { title: "Include Symbols", state: false },
];

const page = () => {
  const [range, setRange] = useState<number>(4);
  const [checkboxs, setCheckboxes] = useState(checkboxData);
  const [copied, setCopied] = useState(false);

  const checkboxHandler = (i: number) => {
    // let updatedCheckbox = [...checkboxs];
    // updatedCheckbox[i].state = !updatedCheckbox[i].state;
    // setCheckboxes(updatedCheckbox);

    setCheckboxes((prevCheck) =>
      prevCheck.map((check, index) =>
        index === i ? { ...check, state: !check.state } : check
      )
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { password, errors, generatePassword } = usePasswordGenerator();
  const { title: passwordStrength, color } = getPasswordStrength(password);

  return (
    <div className="w-[40%] bg-zinc-900 p-8 rounded-xl space-y-10">
      {password && (
        <div className="flex items-center justify-between w-full">
          <div>{password}</div>
          <button
            className="!bg-teal-700 p-2 rounded-md !ring-teal-700 primary-btn"
            onClick={() => handleCopy()}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl">Character Length</h2>
          <p className="font-semibold text-lg">{range}</p>
        </div>
        <input
          type="range"
          className="w-full mt-2"
          value={range}
          onChange={(e) => setRange(+e.target.value)}
          min={0}
          max={20}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {checkboxs.map((checkbox, index) => (
          <label
            htmlFor={checkbox.title}
            key={checkbox.title}
            className="flex items-center gap-2 cursor-pointer font-semibold "
          >
            <input
              id={checkbox.title}
              type="checkbox"
              onChange={() => checkboxHandler(index)}
              checked={checkbox.state}
              className="w-4 h-4"
            />{" "}
            {checkbox.title}
          </label>
        ))}
      </div>

      <div className="">
        {errors && <p className="font-semibold text-red-500">{errors}</p>}
        {password && (
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Strength</p>
            <p className={`font-semibold text-${color}`}>{passwordStrength}</p>
          </div>
        )}
        <button
          className="w-full p-4 !ring-teal-700 !bg-teal-700 mt-3 rounded-md primary-btn"
          onClick={() => generatePassword(checkboxs, range)}
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default page;
