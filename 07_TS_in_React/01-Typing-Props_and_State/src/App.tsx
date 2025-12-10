import "./App.css";
import Button from "./components/Button";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

import { user } from "./data";

// # Component Composition & Prop Passing
// * This component demonstrates how to compose multiple child components and pass props to them
// * Props are passed as attributes, and TypeScript ensures type safety at compile time
function App() {
  return (
    <>
      {/* * Passing props: username, image, info are required, status must be one of the union type values */}
      <UserProfile username={user.username} image={user.image} info={user.info} status="active" />
      {/* * Button accepts standard HTML button props (via ComponentProps) plus custom variant prop */}
      {/* ! TypeScript will error if you pass invalid props (e.g., wrong type for onClick) */}
      <Button
        //  disabled={true}
        type="button"
        className="extra-class"
        // variant="secondary"
        onClick={(e) => console.log(e.clientX)}
        style={{ color: "rebeccapurple" }}
        title="Click me!"
      >
        <span>Send</span>
      </Button>

      <UserList />
    </>
  );
}

export default App;
