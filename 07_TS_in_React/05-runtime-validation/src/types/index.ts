import type z from "zod";
import type { IceCreamOrderSchema } from "../schemas/iceCreamSchema";
import type { UserSchema } from "../schemas/userSchema";

// ! The Zod schema can serve directly as a basis for our TypeScript type.
// z.infer<> extracts the type from the schema.
export type User = z.infer<typeof UserSchema>;

// * The TypeScript type is derived directly from the Zod schema - genius, right?
type IceCreamOrderType = z.infer<typeof IceCreamOrderSchema>;

// * Here we define the type for the ice cream order state.
// * This type is based on the Zod schema and represents both form data and potential errors.
// ! scoops: string[] is replaced here by scoops: string.
type IceCreamState = Omit<IceCreamOrderType, "scoops"> & {
  error?: string;
  scoops: string;
};

export type { IceCreamOrderType, IceCreamState };
