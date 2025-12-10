import type { ComponentProps } from "react";

// # TypeScript: Extending Component Props with Utility Types
// * ComponentProps<"button"> extracts all native HTML button element props automatically
// * This avoids manually defining common props like onClick, disabled, type, etc.
// type ButtonProps = {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// };

// * Using intersection type (&) to extend ComponentProps with custom variant prop
// * This combines all button props with our custom variant union type
type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

// * Rest/spread pattern: ...props captures all remaining props from ComponentProps
// * This allows passing any valid button attribute (onClick, disabled, aria-*, etc.) without explicitly defining them
const Button = ({ variant = "primary", className = "", ...props }: ButtonProps) => {
  return (
    <button className={`my-button btn-${variant} ${className}`} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
