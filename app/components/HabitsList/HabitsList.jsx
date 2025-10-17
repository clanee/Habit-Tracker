"use client";

import Styles from "./HabitsList.module.css";
import { useState } from "react";

export const HabitsList = () => {
  const [isChecked, setIsChecked] = useState({
    box1: false,
    box2: false,
  });

  const checkChange = (name) => (e) => {
    setIsChecked({
      ...isChecked,
      [name]: e.target.checked,
    });
  };
  return (
    <div className={Styles["habits__list"]}>
      <div className={Styles["habit"]}>
        <div className={Styles["habit__description"]}>
          <p className={Styles["habit__p__description"]}>Task description</p>
        </div>
        <div className={Styles["habit__status"]}>
          {isChecked.box1 ? (
            <p
              className={Styles["habit__p__status"]}
              style={{ color: "green" }}
            >
              Сделано
            </p>
          ) : (
            <p className={Styles["habit__p__status"]} style={{ color: "red" }}>
              В процессе
            </p>
          )}
        </div>
        <div className={Styles["habit__action"]}>
          <input
            type="checkbox"
            className={Styles["habit__input__action"]}
            checked={isChecked.box1}
            onChange={checkChange("box1")}
          ></input>
        </div>
        <div>
          <input
            type="button"
            value="×"
            className={Styles["habit__input__delete"]}
          ></input>
        </div>
      </div>
      <div className={Styles["habit"]}>
        <div className={Styles["habit__description"]}>
          <p className={Styles["habit__p__description"]}>Task description</p>
        </div>
        <div className={Styles["habit__status"]}>
          {isChecked.box2 ? (
            <p
              className={Styles["habit__p__status"]}
              style={{ color: "green" }}
            >
              Сделано
            </p>
          ) : (
            <p className={Styles["habit__p__status"]} style={{ color: "red" }}>
              В процессе
            </p>
          )}
        </div>
        <div className={Styles["habit__action"]}>
          <input
            type="checkbox"
            className={Styles["habit__input__action"]}
            checked={isChecked.box2}
            onChange={checkChange("box2")}
          ></input>
        </div>
        <div>
          <input
            type="button"
            value="×"
            className={Styles["habit__input__delete"]}
          ></input>
        </div>
      </div>
    </div>
  );
};
