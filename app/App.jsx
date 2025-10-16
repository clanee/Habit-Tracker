import { Header } from "./components/Header/Header";

export const App = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
