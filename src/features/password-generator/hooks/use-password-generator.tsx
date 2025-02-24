import { CheckboxDataTypes } from "@/app/password-generator/page";
import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const generatePassword = (
    checkBoxData: CheckboxDataTypes[],
    length: number
  ) => {
    let charSet = "";
    let newPassword: string[] = [];
    let remainingLength = length;

    const selectedOption = checkBoxData.filter(
      (checkbox: CheckboxDataTypes, index: number) => checkbox.state
    );

    if (selectedOption.length === 0) {
      setErrors("Select atleast one option");
      setPassword("");
      return;
    }

    selectedOption.forEach((option, index) => {
      let char = "";
      switch (option.title) {
        case "Include Uppercase Letters":
          char += "QWERTYUIOPASDFGHJKLZXCVBNM";
          break;

        case "Include Lowercase Letters":
          char += "qwertyuiopasdfghjklzxcvbnm";
          break;

        case "Include Numbers":
          char += "1234567890";
          break;

        case "Include Symbols":
          char += "!@#$%^&*()";
          break;

        default:
          break;
      }

      if (char) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newPassword.push(randomChar);
        charSet += char;
        remainingLength--;
      }
    });

    if (remainingLength < 0) remainingLength = 0;

    // console.log(remainingLength);

    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword.push(charSet[randomIndex]);
    }

    newPassword = newPassword
      .map((char) => ({ char, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ char }) => char);

    // console.log(newPassword);
    setPassword(newPassword.join(""));
    setErrors("");
  };

  return { password, errors, generatePassword };
};

export default usePasswordGenerator;
