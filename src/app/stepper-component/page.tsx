"use client";

import CustomerInfo from "@/features/stepper-component/CustomerInfo";
import DeleveredInfo from "@/features/stepper-component/DeleveredInfo";
import PaymentInfo from "@/features/stepper-component/PaymentInfo";
import ShippingInfo from "@/features/stepper-component/ShippingInfo";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);
  const [margins, setMargins] = useState({ leftMargin: 0, rightMargin: 0 });

  const stepperData = [
    { name: "Customer Info", component: <CustomerInfo /> },
    { name: "Shipping Info", component: <ShippingInfo /> },
    { name: "Payment", component: <PaymentInfo /> },
    { name: "Delevered", component: <DeleveredInfo /> },
  ];

  useEffect(() => {
    console.log(stepRef.current[stepperData.length - 1]?.offsetWidth);
    setMargins({
      leftMargin: (stepRef.current[0]?.offsetWidth || 0) / 2,
      rightMargin:
        (stepRef.current[stepperData.length - 1]?.offsetWidth || 0) / 2,
    });
  }, [stepRef.current]);

  const nextHandler = () => {
    setCurrentStep((prev: number) => {
      if (prev === stepperData.length) {
        setIsComplete(true);
        return prev;
      }
      return prev + 1;
    });
  };

  const ActiveComponent = () => stepperData[currentStep - 1].component;

  const calcProgressBarWidth = () => {
    return ((currentStep - 1) / (stepperData.length - 1)) * 100;
  };

  return (
    <div className="space-y-6 w-full mx-96">
      <h2 className="text-2xl">Stepper Component</h2>
      <div className="flex items-center justify-between relative">
        {stepperData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (stepRef.current) {
                stepRef.current[index] = el;
              }
            }}
            className="flex items-center justify-center flex-col space-y-4"
          >
            <div
              className={`text-xl w-12 h-12 flex items-center z-20 bg-gray-100 justify-center rounded-full ${
                currentStep > index + 1 || isComplete
                  ? "bg-green-500 text-white"
                  : ""
              } ${currentStep === index + 1 ? "!bg-blue-500 text-white" : ""}`}
            >
              {index + 1}
            </div>
            <div className="text-xl text-gray-600">{item.name}</div>
          </div>
        ))}
        <div
          className="absolute bg-gray-100  left-0 top-6 h-1.5"
          style={{
            width: `calc(100% - ${margins.leftMargin + margins.rightMargin}px)`,
            marginLeft: `${margins.leftMargin}px`,
            marginRight: `${margins.rightMargin}px`,
          }}
        >
          <div
            className="h-full bg-green-500 transition-all duration-200 ease-in"
            style={{ width: `${calcProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <div className="text-center">
        <ActiveComponent />
      </div>

      <div className="text-center">
        <button className="primary-btn" onClick={nextHandler}>
          {currentStep === stepperData.length ? "Finished" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default page;
