import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        padding: "2rem",
      }}
    >
      Theme Context
    </div>
  );
};

export default Box;
