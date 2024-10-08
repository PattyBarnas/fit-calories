"use client";

import { createTodaysMeal } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function Today() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createTodaysMeal, initialState);
  return (
    <form action={dispatch}>
      <div>
        <div>
          <label htmlFor="food-type">Type of food</label>
          <input type="text" />
        </div>
        <div>
          {state.errors?.type &&
            state.errors.type.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
        </div>
        <div>
          <label htmlFor="serving-size">Please select amount</label>
          <input type="text" />
        </div>
        <div>
          {state.errors?.amount &&
            state.errors.amount.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
        </div>

        <div>
          <label htmlFor="foodType">Amount of Calories per serving</label>
          <input type="text" />
        </div>
        <div>
          {state.errors?.calories &&
            state.errors.calories.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
        </div>
        <button>Add Food</button>
      </div>
    </form>
  );
}
