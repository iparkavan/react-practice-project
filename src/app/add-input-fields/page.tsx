"use client";

import React, { FormEvent, useState } from "react";

interface InputGroupType {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const page = () => {
  const [inputs, setInputs] = useState<InputGroupType[]>([
    { id: Date.now(), name: "", email: "", phone: "" },
  ]);

  const addInput = () => {
    setInputs((prev) => [
      ...prev,
      { id: Date.now(), name: "", email: "", phone: "" },
    ]);
  };

  const removeInput = (id: number) => {
    setInputs((prev) => prev.filter((input) => input.id !== id));
  };

  const handleChange = (
    id: number,
    name: keyof InputGroupType,
    value: string
  ) => {
    setInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, [name]: value } : input
      )
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputs", inputs);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      {inputs.map((input, index) => (
        <div key={input.id} className="space-x-4 space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="primary-input"
            onChange={(e) =>
              handleChange(
                input.id,
                e.target.name as keyof InputGroupType,
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="primary-input"
            onChange={(e) =>
              handleChange(
                input.id,
                e.target.name as keyof InputGroupType,
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="primary-input"
            onChange={(e) =>
              handleChange(
                input.id,
                e.target.name as keyof InputGroupType,
                e.target.value
              )
            }
          />
          {index !== 0 && (
            <button
              type="button"
              onClick={() => removeInput(input.id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          )}
          {index === inputs.length - 1 && (
            <button onClick={addInput} type="button" className="primary-btn">
              Add Input
            </button>
          )}
        </div>
      ))}
      <div className="text-center mt-6">
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default page;
