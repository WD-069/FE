import { useState } from "react";
import LightBulb from "./components/LightBulb";

function App() {
  const [lightSwitch, setLightSwitch] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter < 10) {
      // setLightSwitch(() => lightSwitch === false ? true : false);
      setLightSwitch((l) => !l);
    }

    if (lightSwitch) {
      setCounter((c) => c + 1);
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={counter >= 10}>
        {lightSwitch ? "Switch off" : "Switch on"}
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <LightBulb lightSwitch={lightSwitch} />
    </>
  );
}

export default App;
