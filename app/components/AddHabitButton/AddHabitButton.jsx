import Styles from "./AddHabitButton.module.css";

export const AddHabitButton = ({ onClick }) => {
  return (
    <div className={Styles["add__habit"]}>
      <input
        type="button"
        value="Добавить привычку"
        className={Styles["add__habit__button"]}
        onClick={onClick}
      ></input>
    </div>
  );
};
