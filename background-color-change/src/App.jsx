import { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");

  return (
    <div className={classes.container} style={{ backgroundColor: `${backgroundColor}` }}>
      <div className={classes.container__title}>{backgroundColor}</div>
      <div className={classes.container__btn}>
        <button onClick={() => setBackgroundColor("green")} className={classes.btn_green}>
          Green
        </button>
        <button onClick={() => setBackgroundColor("red")} className={classes.btn_red}>
          Red
        </button>
        <button onClick={() => setBackgroundColor("blue")} className={classes.btn_blue}>
          Blue
        </button>
        <button onClick={() => setBackgroundColor("purple")} className={classes.btn_purple}>
          Purple
        </button>
        <button onClick={() => setBackgroundColor("orange")} className={classes.btn_orange}>
          Orange
        </button>
      </div>
    </div>
  );
};

export default App;
