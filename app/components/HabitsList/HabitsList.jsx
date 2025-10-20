"use client";

import Styles from "./HabitsList.module.css";
import { AddHabitButton } from "../AddHabitButton/AddHabitButton";
import { useState } from "react";

export const HabitsList = () => {
  const [habits, setHabits] = useState([
    { id: 1, description: "Task description", completed: false },
    { id: 2, description: "Task description", completed: false },
  ]);

  const checkChange = (id) => (e) => {
    setHabits((prev) => {
      return prev.map((habit) => {
        return habit.id === id
          ? { ...habit, completed: e.target.checked }
          : habit;
      });
    });
  };

  const addNewHabit = () => {
    const newId =
      habits.length > 0
        ? Math.max(...habits.map((current) => current.id)) + 1
        : 1;
    setHabits((prev) => [
      ...prev,
      { id: newId, description: "Task description", completed: false },
    ]);
  };

  const handleDelete = (id) => () => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
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
      <AddHabitButton onClick={addNewHabit} />
    </div>
  );
};
