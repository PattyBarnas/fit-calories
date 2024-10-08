"use server";
import { z } from "zod";

const FormSchema = z.object({
  foodId: z.number(),
  type: z.string(),
  amount: z.number(),
  calories: z.number(),
  date: z.string(),
});

const CreateTodaysMeal = FormSchema.omit({ foodId: true });

export type State = {
  errors?: {
    foodId?: string[];
    type?: string[];
    amount?: string[];
    date?: string[];
  };
  message?: string | null;
};

export async function createTodaysMeal(prevState: State, formData: FormData) {
  // validation
  const validateFields = CreateTodaysMeal.safeParse({
    type: formData.get("type"),
    amount: formData.get("amount"),
    date: formData.get("date"),
    calories: formData.get("calories"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message:
        "Please do not leave any field empty, to get accurate data everything must be filled!",
    };
  }

  const { foodId, type, amount, calories, date } = validateFields.data;
  const date = new Date().toISOString().split("T")[0];

  //   CONNECT TO DATA BASE THEN INSERT INFO
}
