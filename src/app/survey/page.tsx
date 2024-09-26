"use client";

import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState<number>(0);

  const handleNextStep = (): void => {
    setStep((current) => current + 1);
  };
  const handlePrevStep = (): void => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  return (
    <form>
      <div>
        {step === 0 && (
          <div>
            <label htmlFor="age">How old are you?</label>
            <input id="" />
          </div>
        )}
        {step === 1 && (
          <div>
            <label htmlFor="weight">How much do you currently weight?</label>
            <input id="weight" />
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="gender">What is your gender?</label>
            <input id="gender" />
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="height">What is your height?</label>
            <input id="height"></input>
          </div>
        )}
        <button type="button" onClick={handlePrevStep}>
          {"<-"}
        </button>
        <button type="button" onClick={handleNextStep}>
          {"->"}
        </button>
      </div>
    </form>
  );
}
