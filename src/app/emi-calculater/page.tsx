"use client";

import React, { useEffect, useState } from "react";

const App = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const emiCalculator = () => {
    if (interestRate && loanAmount && loanTenure) {
      let P = loanAmount;
      let R = interestRate / 12 / 100;
      let N = loanTenure;

      if (R === 0) {
        setEmi(P / N);
        return;
      }

      const emiValue =
        (P * R * Math.pow(1 + R, N * 12)) / (Math.pow(1 + R, N * 12) - 1);
      setEmi(Math.round(emiValue));
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
          onChange={(e) => setLoanAmount(+e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate"
          className="primary-input"
          onChange={(e) => setInterestRate(+e.target.value)}
        />

        <input
          type="number"
          placeholder="Loan Tenure"
          className="primary-input"
          onChange={(e) => setLoanTenure(+e.target.value)}
        />
      </div>
      <div>
        <strong>You Interest rate is {emi > 0 ? emi : ""}</strong>
      </div>
    </div>
  );
};

export default App;
