// # TypeScript: Type Reuse
// * Reusing the UserProfileProps type ensures the data structure matches what the component expects
// * This creates a single source of truth: if the component's prop types change, TypeScript will error here
import type { UserProfileProps } from "./components/UserProfile";

// * Type annotation ensures this object conforms to UserProfileProps
// ! If you add an invalid property or wrong type, TypeScript will catch it at compile time
const user: UserProfileProps = {
  username: "Guybrush",
  image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Guybrush_Threepwood.png",
  info: "Wants to become a pirate.",
  // * status must be one of the union type values: "active" | "paused" | "inactive"
  status: "active",
};

export { user };
