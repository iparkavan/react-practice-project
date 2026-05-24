"use client";

import React, { ChangeEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    description: "",
    gender: "",
    country: "",
    isAdmin: false,
    skills: ["React", "Node"],
    file: null as File | null,
    date: "",
    color: "",
    range: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    console.log(value);

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      setFormData((prev) => ({ ...prev, file: files ? files[0] : null }));
    } else if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      if (name === "skills") {
        setFormData((prev) => ({
          ...prev,
          skills: checked
            ? [...prev.skills, value]
            : prev.skills.filter((skill) => skill !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(formData);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <h1>All Input Types</h1>

        {/* TEXT */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br />
        <br />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br />
        <br />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br />
        <br />

        {/* NUMBER */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <br />
        <br />

        {/* TEXTAREA */}
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br />
        <br />

        {/* RADIO */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />
        <br />

        {/* SELECT */}
        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        {/* SINGLE CHECKBOX */}
        <label>
          <input
            type="checkbox"
            name="isAdmin"
            // value={formData.isAdmin}
            checked={formData.isAdmin}
            onChange={handleChange}
          />
          Is Admin
        </label>

        <br />
        <br />

        {/* MULTIPLE CHECKBOX */}
        <label>
          <input
            type="checkbox"
            name="skills"
            value="React"
            checked={formData.skills.includes("React")}
            onChange={handleChange}
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            name="skills"
            value="Node"
            checked={formData.skills.includes("Node")}
            onChange={handleChange}
          />
          Node
        </label>

        <br />
        <br />

        {/* FILE */}
        <input type="file" name="file" onChange={handleChange} />

        <br />
        <br />

        {/* DATE */}
        <input type="date" name="date" onChange={handleChange} />

        <br />
        <br />

        {/* COLOR */}
        <input type="color" name="color" onChange={handleChange} />

        <br />
        <br />

        {/* RANGE */}
        <input
          type="range"
          name="range"
          min="0"
          max="100"
          onChange={handleChange}
        />

        {/* <p>Range Value: {formData.range}</p> */}

        <hr />

        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default page;
