// components/Alert.tsx
// This component should receive `message` (string) and possible alert are "info", "warn","error"
// If the application is in development mode, output the message to the console as well using the appropriate method

// # Type Definitions
// * Defining exact string literals (Union Type) restricts the allowed values for 'type'
type AlertProps = {
  message: string;
  type: "info" | "warn" | "error";
};

const Alert = ({ message, type }: AlertProps) => {
  // # Environment Variables
  // * Accessing Vite's built-in environment variable to check if we are in Development mode
  if (import.meta.env.DEV) {
    console.info(type, message);
  }

  // # Dynamic Classes
  // * Using template literals to dynamically construct the className based on the 'type' prop
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
