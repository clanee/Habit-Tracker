"use client";

import Styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={Styles["header"]}>
      <p className={Styles["name__header"]}>HABIT TRACKER</p>
      <div className={Styles["ul"]}>
        <div className={Styles["li"]}>
          <p className={Styles["name__li"]}>Мои привычки</p>
        </div>
        <div className={Styles["li"]}>
          <p className={Styles["name__li"]}>Статистика</p>
        </div>
      </div>
    </header>
  );
};
