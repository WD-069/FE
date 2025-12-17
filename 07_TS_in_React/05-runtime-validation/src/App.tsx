import { useActionState, useId, useState } from "react";
import "./App.css";

import z from "zod";
import {
  IceCreamOrderSchema,
  iceCreamFlavours,
} from "./schemas/iceCreamSchema";
import type { IceCreamOrderType, IceCreamState } from "./types";

const initialState: IceCreamState = {
  error: "",
  cone: true,
  cream: 0,
  scoops: "",
  spoon: false,
  sprinkles: undefined,
};

// ! This is the action for processing the ice cream order.
async function iceCreamAction(_prev: IceCreamState, formData: FormData) {
  const rawData = Object.fromEntries(formData);

  // * We transform the raw form data into the expected order format.
  const orderToSend: IceCreamOrderType = {
    // ? Here we convert the comma-separated string back into an array.
    scoops: typeof rawData.scoops === "string" ? rawData.scoops.split(",") : [],
    // * Cream value is converted to a number, fallback is 0.
    cream: Number(rawData.cream) || 0,
    // * Checkbox values are converted to Boolean (are "on" or undefined).
    spoon: !!rawData.spoon,
    cone: !!rawData.cone,
    // * Sprinkles remain string or undefined.
    sprinkles: rawData.sprinkles as string | undefined,
  };

  // ! Now we validate the order with the Zod schema.
  // ? safeParse returns an object with success, data, and error.
  const { data, error, success } = IceCreamOrderSchema.safeParse(orderToSend);
  // console.log('DATA', data);

  // * If validation was successful...
  if (success) {
    console.log("Sending data...");
    // * Here would normally be your real API call.
    // ! We reset the form to the initial state.
    return initialState;
  }

  // ? On validation errors: We return the current state incl. error message.
  // ! Important: We keep the inputs so you can correct them!
  return {
    ...initialState,
    scoops: rawData.scoops as string,
    sprinkles: rawData.sprinkles as string | undefined,
    // * Here we format the Zod error into a readable message.
    error: z.prettifyError(error),
  };
}

function App() {
  const [scoops, setScoops] = useState<string[]>([]);

  const [state, action, pending] = useActionState(iceCreamAction, initialState);

  // * useId generates a unique ID for form elements.
  const id = useId();

  return (
    <div>
      <form action={action} style={{ marginTop: "20px" }}>
        <div style={{ margin: "15px 0" }}>
          <label htmlFor={`${id}-scoops`}>Ice Cream Flavors:</label>

          <select
            name="scoops-collect"
            id={`${id}-scoops-collect`}
            style={{ textTransform: "capitalize" }}
            // * On change, we add the flavor to the array.
            onChange={(e) => setScoops((s) => [...s, e.target.value])}
          >
            {/* * We map over all available ice cream flavors */}
            {iceCreamFlavours.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          {/* ! Hidden input field for transmission
              It stores flavors as a comma-separated list on submit. */}
          <input
            name="scoops"
            id={`${id}-scoops`}
            value={scoops}
            hidden
          ></input>

          {/* * Display selected flavors as buttons */}
          <div>
            {scoops.map((s, ind) => (
              // Button to remove a flavor
              // ! toSpliced is great: It creates a new array without the element at index ind!
              <button
                type="button"
                key={s + ind}
                onClick={() => setScoops((p) => p.toSpliced(ind, 1))}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            <input type="checkbox" name="cone" defaultChecked={state.cone} />
            Serve in cone
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            Sprinkles:
            <input
              type="text"
              name="sprinkles"
              placeholder="Enter sprinkles type"
              defaultValue={state.sprinkles}
            />
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            <input type="checkbox" name="spoon" defaultChecked={state.spoon} />
            Need a spoon
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            Cream amount (1-5):
            <input
              type="number"
              name="cream"
              min="0"
              max="5"
              defaultValue={state.cream}
            />
          </label>
        </div>

        <button type="submit">Place Order</button>
      </form>

      {/* * Shows validation error if present */}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}

export default App;
