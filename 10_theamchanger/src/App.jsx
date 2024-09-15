import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theam";
import ThemeBtn from "./componant/button";
import Card from "./componant/card";

function App() {
  const [themeMode, setTheme] = useState("light");
  const lighttheme = () => {
    setTheme("light");
  };
  const darktheme = () => {
    setTheme("dark");
  };

  //actual change
  useEffect(() => {
    let htmlbody = document.querySelector("body");
    htmlbody.classList.remove("light", "dark");
    htmlbody.classList.add(themeMode);
  });
  return (
    <>
      <ThemeProvider value={{ themeMode, lighttheme, darktheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
