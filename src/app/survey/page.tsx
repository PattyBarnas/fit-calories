"use client";

import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    gender: "",
    height: "",
  });

  const handleNextStep = (): void => {
    setStep((current) => current + 1);
  };
  const handlePrevStep = (): void => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value, name, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [type === "radio" ? name : id]: value,
    }));
  };

  return (
    <form>
      <div>
        {step === 0 && (
          <div>
            <label htmlFor="age">How old are you?</label>
            <input id="age" onChange={handleFormChange} value={formData.age} />
          </div>
        )}
        {step === 1 && (
          <div>
            <label htmlFor="weight">How much do you currently weight?</label>
            <input
              id="weight"
              onChange={handleFormChange}
              value={formData.weight}
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="gender">What is your gender?</label>
            <div>
              <label htmlFor="female">Female</label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="male">Male</label>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleFormChange}
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="height">What is your height?</label>
            <input
              id="height"
              onChange={handleFormChange}
              value={formData.height}
            />
          </div>
        )}
        {step === 0 ? null : (
          <button type="button" onClick={handlePrevStep}>
            {"<-"}
          </button>
        )}
        {step === 3 ? null : (
          <button type="button" onClick={handleNextStep}>
            {"->"}
          </button>
        )}
      </div>
    </form>
  );
}
