"use client";

import { Input } from "postcss";
import React, {
  ChangeEvent,
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const Page = () => {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [missed, setMissed] = useState(["", "", "", ""]);
  const focusRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    focusRef.current[0]?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (!Number(value)) return;

    // if (value === "" || (!isNaN(Number(value)) && value.length === 1)) {
    setInputs((prev) => prev.map((input, i) => (i === index ? value : input)));
    // }

    if (index < inputs.length - 1 && value !== "") {
      focusRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDownChange = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { keyCode } = e;

    if (keyCode === 8) {
      setInputs((prev) => prev.map((input, i) => (i === index ? "" : input)));

      if (index > 0) {
        focusRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text");

    if (paste.length === 0 || paste.length !== inputs.length) return;

    setInputs(paste.split(""));
    focusRef.current[inputs.length - 1]?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const empty = inputs.map((input, index) => {
      if (input === "") {
        return index;
      }
    });

    const missed = empty.filter((item, index) => item || item === 0);
    setMissed(missed.map(String));
  };

  //   0988

  return (
    <form className="space-x-4" onSubmit={onSubmit}>
      {inputs.map((input, index) => (
        <input
          className={`primary-input w-12 h-12 text-center ${
            missed.includes(index.toString()) ? "border-2 border-red-500" : ""
          }`}
          key={index}
          ref={(el) => {
            focusRef.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={input}
          onPaste={(e) => handlePaste(e)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDownChange(e, index)}
        />
      ))}

      <button className="primary-btn">Submit</button>
    </form>
  );
};

export default Page;
