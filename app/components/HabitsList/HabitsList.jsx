import Styles from "./HabitsList.module.css";

export const HabitsList = () => {
  return (
    <div className={Styles["habits__list"]}>
      <div className={Styles["habit"]}>
        <div className={Styles["habit__description"]}>
          <p className={Styles["habit__p__description"]}>Task description</p>
        </div>
        <p className={Styles["habit__status"]}>В процессе</p>
        <input type="checkbox" className={Styles["habit__action"]}></input>
        <input
          type="button"
          value="×"
          className={Styles["habit__delete"]}
        ></input>
      </div>
      <div className={Styles["habit"]}>
        <div className={Styles["habit__description"]}>
          <p className={Styles["habit__p__description"]}>Task description</p>
        </div>
        <p className={Styles["habit__status"]}>Сделано</p>
        <input type="checkbox" className={Styles["habit__action"]}></input>
        <input
          type="button"
          value="×"
          className={Styles["habit__delete"]}
        ></input>
      </div>
    </div>
  );
};
