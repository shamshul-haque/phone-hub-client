import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const handleSwitchTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme);
  }, []);

  return { theme, handleSwitchTheme };
};

export default useTheme;
