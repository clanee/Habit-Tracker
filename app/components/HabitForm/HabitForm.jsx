"use client";

import Styles from "./HabitForm.module.css";
import { useState } from "react";

export const HabitForm = (props) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(description);
    setDescription("");
    props.close();
  };

  return (
    <div className={Styles["habit__form"]}>
      <p className={Styles["habit__form__p"]}>Создать новую привычку</p>
      <form className={Styles["habit__form__form"]} onSubmit={handleSubmit}>
        <label className={Styles["habit__form__label"]}>
          <span className={Styles["habit__form__span"]}>
            Введите описание привычки:
          </span>
          <input
            type="text"
            placeholder="Описание"
            className={Styles["habit__form__input"]}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>
        <div className={Styles["habit__form__buttons"]}>
          <button className={Styles["habit__form__reset"]} type="reset">
            Очистить
          </button>
          <button className={Styles["habit__form__submit"]} type="submit">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
