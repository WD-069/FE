// # TypeScript: Type Definitions & Centralized Type Exports
// * Defining types in a central location makes them reusable across the application
// * This follows the DRY principle: define once, use everywhere

// * Object type definition: User must have id (number), username (string), and info (string)
// * All properties are required by default (no ? modifier)
type User = {
  id: number;
  username: string;
  info: string;
};

// * Union type literal: ComponentStatus can ONLY be one of these four exact string values
// * This prevents typos and invalid status values throughout the codebase
type ComponentStatus = "loading" | "success" | "error" | "idle";

// * Exporting types allows other files to import and reuse them
// * This creates a single source of truth for type definitions
export type { User, ComponentStatus };
