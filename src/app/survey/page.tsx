"use client";

import React, { useState } from "react";

interface formDataTypes {
  age: number;
  weight: number;
  gender: string;
  height: number;
  targetWeight: number;
}

export default function Page() {
  const [step, setStep] = useState<number>(0);

  const [formData, setFormData] = useState<formDataTypes>({
    age: 0,
    weight: 0,
    gender: "",
    height: 0,
    targetWeight: 0,
  });
  const [error, setError] = useState<string | null>(null);

  // const bmi: number = (formData.weight * 703) / formData.height;

  const handleNextStep = (): void => {
    if (step === 0 && formData.age === 0) {
      setError("Please enter age > 0");
      return;
    }
    if (step === 1 && formData.weight === 0) {
      setError("Please enter weight > 0");
      return;
    }
    if (step === 2 && formData.gender.trim().length === 0) {
      setError("Please select gender > 0");
      return;
    }
    if (step === 3 && formData.height === 0) {
      setError("Please enter weight > 0");
      return;
    }

    setError(null);

    setStep((current) => current + 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value, name, type } = e.target;
    console.log(value);

    setFormData((prev) => ({
      ...prev,
      [type === "radio" ? name : id]: value,
    }));
  };
  // 1187.4 + 914.4 -190.4

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {
        <div>
          {step === 0 && (
            <div>
              <label htmlFor="age">How old are you?</label>
              <input
                id="age"
                onChange={handleFormChange}
                value={formData.age}
                required
              />
              {error ? error : null}
            </div>
          )}
          {step === 1 && (
            <div>
              <label htmlFor="weight">How much do you currently weight?</label>
              <input
                id="weight"
                onChange={handleFormChange}
                value={formData.weight}
                required
              />
              <p>lb</p>
              {error ? error : null}
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
                  required
                />
                {/* {error ? error : null} */}
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
                  required
                />
                {error ? error : null}
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
                required
              />
              {error ? error : null}
            </div>
          )}

          {step === 3 ? (
            <button type="submit" onClick={handleNextStep}>
              {"submit"}
            </button>
          ) : (
            <button type="button" onClick={handleNextStep}>
              {"->"}
            </button>
          )}
        </div>
      }
    </form>
  );
}
