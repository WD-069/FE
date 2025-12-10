// components/Status.tsx
// This component should receive a `status` prop with one of: "loading", "success" , "error"

// # Type Definitions
// * String Union Type: Restricts 'status' to only these exact string values
type StatusProps = { status: "loading" | "success" | "error" };

const Status = ({ status }: StatusProps) => {
  return <p>Status: {status}</p>;
};

export default Status;
