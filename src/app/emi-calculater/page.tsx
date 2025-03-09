"use client";

import React, { useEffect, useState } from "react";

const App = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const emiCalculator = () => {
    if (loanAmount > 0 && loanTenure > 0) {
      let P = loanAmount;
      let R = interestRate / 12 / 100; // Convert annual interest rate to monthly
      let N = loanTenure * 12; // Convert years to months

      if (R === 0) {
        setEmi(Math.round(P / N)); // Simple division for zero-interest case
        return;
      }

      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(Math.round(emiValue));
    } else {
      setEmi(0); // Reset EMI if invalid values are entered
    }
  };

  useEffect(() => {
    emiCalculator();
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-4">
        <input
          type="number"
          placeholder="Loan Amount"
          className="primary-input"
          onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
        />

        <input
          type="number"
          placeholder="Interest Rate"
          className="primary-input"
          onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
        />

        <input
          type="number"
          placeholder="Loan Tenure (Years)"
          className="primary-input"
          onChange={(e) => setLoanTenure(Number(e.target.value) || 0)}
        />
      </div>
      <div>
        <strong>Your EMI is {emi > 0 ? emi : "0"}</strong>
      </div>
    </div>
  );
};

export default App;
