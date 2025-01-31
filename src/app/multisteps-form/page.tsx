"use client";

import AddressFrom from "@/features/multi-steps-form/form-section/address-form";
import PersonalForm from "@/features/multi-steps-form/form-section/personal-form";
import UserInfoForm from "@/features/multi-steps-form/form-section/user-info-form";
import useMultiStepsForm from "@/features/multi-steps-form/hooks/useMultiStepsForm";
import {
  addressFieldValidation,
  personalFieldValidation,
  userFieldsValidation,
} from "@/features/multi-steps-form/schema/multi-steps-achema-validation";
import { useState } from "react";

export type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address_1: string;
  address_2: string;
  location: string;
  pin_code: string;
  profile_image: File | null;
  country: string;
  gender: string;
  hobbies: string[];
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  address_1: "",
  address_2: "",
  location: "",
  pin_code: "",
  profile_image: null,
  country: "",
  gender: "",
  hobbies: [],
};

const page = () => {
  const [data, setData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    name: string,
    value: string | number | boolean | File | null
  ) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    currentStepIndex,
    next,
    previous,
    goTo,
    step,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepsForm([
    <UserInfoForm data={data} handleChange={handleChange} errors={errors} />,
    <AddressFrom data={data} handleChange={handleChange} errors={errors} />,
    <PersonalForm data={data} handleChange={handleChange} errors={errors} />,
  ]);

  const validationFunction = [
    userFieldsValidation,
    addressFieldValidation,
    personalFieldValidation,
  ];

  const validateCurrentStep = () => {
    const currentValidation = validationFunction[currentStepIndex];
    const stepErrors = currentValidation(data);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) next();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data", data);
  };

  return (
    <div className="min-h-screen">
      <form className="" onSubmit={onSubmit}>
        <div className="text-center text-gray-500">
          {currentStepIndex + 1} of {steps.length} steps
        </div>
        <div className="m-8 p-4">{step}</div>
        <div className="space-x-4 mt-8 text-center">
          {!isFirstStep && (
            <button onClick={previous} className="border rounded-lg p-3">
              Previous
            </button>
          )}
          <button
            type={isLastStep ? "submit" : "button"}
            onClick={nextStep}
            className="border rounded-lg p-3 bg-green-700 text-white"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
