import Container from "./layouts/Container";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Status from "./components/Status";
import ProfileCard from "./components/ProfileCard";
import Alert from "./components/Alert";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";
import Avatar from "./components/Avatar";
import { useState } from "react";

// # Main Component & State Management
const App = () => {
  // * Local State definition: 'isOn' tracks the toggle state
  // * This state is "lifted" here to be shared or controlled from the parent
  const [isOn, setIsOn] = useState(false);

  // # Helper Functions
  // * This function is passed as a prop to demonstrate passing logic/callbacks
  function add(a: number, b: number) {
    return a + b + Number(isOn);
  }

  return (
    <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
      {/* # Component Composition */}
      {/* * Reuse Greeting component with different props */}
      <Greeting name={"Alice"} />
      <Greeting />
      
      {/* * Initialize Counter with a specific starting value */}
      <Counter initialCount={0} />
      
      {/* * Passing strict string literals as props */}
      <Status status="success" />
      
      {/* * Passing complex objects as props */}
      <ProfileCard user={{ name: "Ada", age: 36 }} />
      
      {/* * Conditional feedback component */}
      <Alert message={"Everything is fine"} type="warn" />
      
      {/* # List Rendering Data */}
      {/* * Passing an array of objects to be rendered as a list */}
      <ProductList
        products={[
          { id: 1, title: "Book" },
          { id: 2, title: "Pen" },
        ]}
      />
      
      {/* # Controlled Component */}
      {/* * Passing state (isOn) and state setter (setIsOn) down to child */}
      {/* ! Passing setters directly can be risky in complex apps, but works for simple cases */}
      <Toggle add={add} isOn={isOn} onToggle={() => setIsOn((isOn) => !isOn)} setIsOn={setIsOn} />
      
      <Avatar url="https://i.pravatar.cc/150?u=a042581f4e29026024d" altText={"User Avatar"} />
    </Container>
  );
};

export default App;
