import { useState } from "react";
import Effect from "./components/Effect";
import FetchInEffect from "./components/FetchInEffect";

function App() {
  // # State Definitions
  // * Controls whether the Effect component is rendered (mounted) or not (unmounted)
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* // * Toggling this checkbox mounts/unmounts the <Effect /> component */}
      {/* // * This triggers the cleanup function in useEffect (if defined) and the mount effect again when re-shown */}
      <input
        type="checkbox"
        checked={toggle}
        onChange={() => setToggle((t) => !t)}
      />

      {/* // # Conditional Rendering */}
      {/* // * If toggle is true, Effect is mounted. If false, it is unmounted (removed from DOM). */}
      {toggle && <Effect />}
      <FetchInEffect />
    </div>
  );
}

export default App;
