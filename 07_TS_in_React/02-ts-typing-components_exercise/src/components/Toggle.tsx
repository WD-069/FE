// components/Toggle.tsx
// This component should receive `isOn` (boolean) and `onToggle` (function that takes no arguments and returns void)
// The onToggle function should change the value of `isOn` meaning you n eed to pass state down ;)

import type { Dispatch, MouseEventHandler, SetStateAction } from "react";

// # Prop Types
type ToggleProps = {
  isOn: boolean;
  // onToggle: () => void;
  // * Specific React event handler type for button clicks
  onToggle: MouseEventHandler<HTMLButtonElement>;
  add: (a: number, b: number) => number;
  // * Type for the State Setter function passed from useState
  setIsOn: Dispatch<SetStateAction<boolean>>;
};

const Toggle = ({ isOn, onToggle, setIsOn, add }: ToggleProps) => {
  // # Event Handling
  // * Using the passed setter to update parent state directly
  // ! In strict patterns, we might prefer calling a custom handler (onToggle) instead of raw setter
  return <button onClick={() => setIsOn((isOn) => !isOn)}>{isOn ? "ON" : "OFF"}</button>;
  // return <button onClick={onToggle}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
