
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppTheme } from "../../utils/AppTheme";
import About from "../About/About";
import './main.css';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const heroStyle: AppTheme = {
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
      height: "1400px",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? heroStyle.light : heroStyle.dark),
    ...heroStyle.common,
  };
  return (
    <main style={themeStyle}>
      hello
      <About />
    </main>
  );
};

export default Hero;
