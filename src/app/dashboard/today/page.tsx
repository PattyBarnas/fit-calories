"use client";

import { createTodaysMeal } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import styles from "@/app/dashboard/today/today.module.css";

export default function Today() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createTodaysMeal, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <div>
        <div className={styles.div}>
          <label htmlFor="food-type">Type of food</label>
          <input type="text" className={styles.input} />
        </div>
        <div>
          {state.errors?.type &&
            state.errors.type.map((error: string) => (
              <p key={error} className={styles.error}>
                {error}
              </p>
            ))}
        </div>
        <div className={styles.div}>
          <label htmlFor="serving-size">Please select amount</label>
          <input type="text" className={styles.input} />
        </div>
        <div>
          {state.errors?.amount &&
            state.errors.amount.map((error: string) => (
              <p key={error} className={styles.error}>
                {error}
              </p>
            ))}
        </div>

        <div className={styles.div}>
          <label htmlFor="foodType">Amount of Calories per serving</label>
          <input type="text" className={styles.input} />
        </div>
        <div>
          {state.errors?.calories &&
            state.errors.calories.map((error: string) => (
              <p key={error} className={styles.error}>
                {error}
              </p>
            ))}
        </div>
        <button className={styles.button}>Add Food</button>
      </div>
    </form>
  );
}
