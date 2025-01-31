// "use client";

import { ReactElement, useState } from "react";

const useMultiStepsForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prevIndex) => {
      if (prevIndex >= steps.length - 1) return prevIndex;
      return prevIndex + 1;
    });
  };

  const previous = () => {
    setCurrentStepIndex((prevIndex) => {
      if (prevIndex <= 0) return prevIndex;
      return prevIndex - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    previous,
    goTo,
  };
};

export default useMultiStepsForm;
