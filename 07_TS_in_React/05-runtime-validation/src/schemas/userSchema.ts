import z from "zod";

// * The schema for the address object with a nested geo object.
const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    // ! z.coerce.number() is super: It automatically converts strings to numbers BEFORE validation.
    lat: z.coerce.number({ error: "This should be a number!" }),
    lng: z.coerce.number(),
    // ! A Union is alos possible:
    // lng: z.union([z.number(), z.string()]),
  }),
});

// * Our main user schema with nested objects.
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  // ? z.email() automatically validates the email format for you.
  email: z.email(),
  // * Here we reuse the AddressSchema - very modular!
  address: AddressSchema,
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

// * z.array() validates that it is an array AND that every element matches the schema.
const UserResponseSchema = z.array(UserSchema);

export { UserSchema, UserResponseSchema };
