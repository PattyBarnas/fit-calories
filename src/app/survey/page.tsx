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
  const [error, setError] = useState<string | null>(null);

  const handleNextStep = (): void => {
    if (step === 0 && formData.age.trim().length === 0) {
      setError("Please enter age");
      return;
    }
    if (step === 1 && formData.weight.trim().length === 0) {
      setError("Please enter weight");
      return;
    }
    if (step === 2 && formData.gender.trim().length === 0) {
      setError("Please select gender");
      return;
    }
    if (step === 3 && formData.height.trim().length === 0) {
      setError("Please enter weight");
      return;
    }
    setError(null);
    setStep((current) => current + 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.preventDefault();
    const { id, value, name, type } = e.target;
    console.log(value);

    setFormData((prev) => ({
      ...prev,
      [type === "radio" ? name : id]: value,
    }));
  };

  const handleFormSubmit = () => {};

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
                {error ? error : null}
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
