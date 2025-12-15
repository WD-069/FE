// # Type Definitions
// * Central definition of types used across the application.
// * This ensures consistency (e.g., Destination structure) and enables auto-completion/validation.
type Destination = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
};

export type { Destination };
