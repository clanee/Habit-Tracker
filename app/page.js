"use client";

import Styles from "./page.module.css";
import { HabitsList } from "./components/HabitsList/HabitsList";

export default function Home() {
  return (
    <main className={Styles["main"]}>
      <div className={Styles["main__greeting"]}>
        <p className={Styles["main__p__greeting"]}>
          Здравствуй!
          <br />
          Сегодня отличный день, чтобы стать лучше
        </p>
      </div>
      <div className={Styles["main__habits__today"]}>
        <div className={Styles["main__columns__name"]}>
          <p className={Styles["main__habits__list"]}>
            Список привычек на сегодня:
          </p>
          <p className={Styles["main__habits__status"]}>Статус:</p>
          <p className={Styles["main__habits__action"]}>Действие:</p>
        </div>
        <HabitsList />
      </div>
    </main>
  );
}
