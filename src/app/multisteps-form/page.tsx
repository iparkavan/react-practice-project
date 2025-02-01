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
import {
  FormData,
  FormErrors,
} from "@/features/multi-steps-form/types/multi-step-form";
import { useState } from "react";

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
    name: keyof FormData,
    value: string | number | boolean | File | null
  ) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
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
    if (!validateCurrentStep()) return;
    if (!isLastStep) {
      next();
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allErrors = validationFunction.reduce((acc, validate) => {
      const stepErrors = validate(data);
      return { ...acc, ...stepErrors };
    }, {} as FormErrors);

    if (Object.keys(allErrors).length === 0) {
      console.log("data", data);
    } else {
      console.log("All fields are mandatory");
      new Error("All fields are mandatory");
    }
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
