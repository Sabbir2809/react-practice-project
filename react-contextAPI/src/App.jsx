import { useEffect } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { useCONTEXT } from "./context/Context";

const App = () => {
  const { themeMode } = useCONTEXT();

  // change theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // themeMode, lightTheme, darkTheme
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Button */}
          <ThemeButton></ThemeButton>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default App;
