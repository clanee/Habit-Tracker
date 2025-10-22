import Styles from "./Popup.module.css";

export const AddHabit = (props) => {
  return (
    <div
      className={`${Styles["popup"]} ${
        props.isOpened && Styles["popup_is-opened"]
      }`}
    ></div>
  );
};
