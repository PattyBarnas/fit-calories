import styles from "./page.module.css";
import Form from "@/app/survey/page";

export default function Home() {
  return (
    <main className={styles.page}>
      <p>
        Welcome to fit-calories an app that will help you achieve your dietry
        goals.
      </p>
      <Form></Form>
      <button></button>
    </main>
  );
}
