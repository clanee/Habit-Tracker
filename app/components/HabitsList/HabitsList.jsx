"use client";

import Styles from "./HabitsList.module.css";
import { useState } from "react";
import { AddHabit } from "../Popup/Popup";
import { Overlay } from "../Overlay/Overlay";
import { HabitForm } from "../HabitForm/HabitForm";

export const HabitsList = () => {
  const [habits, setHabits] = useState([]);
  const [isPopupOpened, setPopupIsOpened] = useState(false);

  const checkChange = (id) => (e) => {
    setHabits((prev) => {
      return prev.map((habit) => {
        return habit.id === id
          ? { ...habit, completed: e.target.checked }
          : habit;
      });
    });
  };

  const addNewHabit = (description) => {
    const newId =
      habits.length > 0
        ? Math.max(...habits.map((current) => current.id)) + 1
        : 1;
    if (description === "") return;
    setHabits((prev) => [
      ...prev,
      { id: newId, description: description, completed: false },
    ]);
  };

  const handleDelete = (id) => () => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };

  return (
    <div className={Styles["habits__list"]}>
      {habits.map((habit) => (
        <div key={habit.id} className={Styles["habit"]}>
          <div className={Styles["habit__description"]}>
            <p className={Styles["habit__p__description"]}>
              {habit.description}
            </p>
          </div>
          <div className={Styles["habit__status"]}>
            {habit.completed ? (
              <p
                className={Styles["habit__p__status"]}
                style={{ color: "green" }}
              >
                Сделано
              </p>
            ) : (
              <p
                className={Styles["habit__p__status"]}
                style={{ color: "red" }}
              >
                В процессе
              </p>
            )}
          </div>
          <div className={Styles["habit__action"]}>
            <input
              type="checkbox"
              className={Styles["habit__input__action"]}
              checked={habit.completed}
              onChange={checkChange(habit.id)}
            />
          </div>
          <div>
            <input
              type="button"
              value="×"
              className={Styles["habit__input__delete"]}
              onClick={handleDelete(habit.id)}
            />
          </div>
        </div>
      ))}
      <div className={Styles["add__habit"]}>
        <button className={Styles["add__habit__button"]} onClick={openPopup}>
          Добавить привычку
        </button>
      </div>
      {isPopupOpened && (
        <>
          <Overlay isOpened={isPopupOpened} close={closePopup} />
          <AddHabit isOpened={isPopupOpened} close={closePopup}>
            <HabitForm add={addNewHabit} close={closePopup} />
          </AddHabit>
        </>
      )}
      {/* <AddHabitButton onClick={addNewHabit} />
      <button onClick={openPopup}></button> */}
    </div>
  );
};
