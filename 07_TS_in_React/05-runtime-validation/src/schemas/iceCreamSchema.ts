import z from "zod";

// * Array with allowed ice cream flavors for enum validation.
export const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "stracciatella",
  "mango",
  "lemon",
  "smurf",
];

const IceCreamOrderSchema = z.object({
  // ! z.enum() validates that the values are exactly contained in our defined array.
  scoops: z.array(z.enum(iceCreamFlavours)),
  cone: z.boolean(),
  // ? .trim() removes whitespace at start/end, .optional() makes the field not required.
  sprinkles: z.string().trim().optional(),
  // * .default() automatically sets 'false' if the field is missing.
  spoon: z.boolean().default(false),
  // ! Here we chain validators: Must be positive and max 5.
  cream: z
    .number()
    .positive({ error: "Too little cream" })
    .max(5, { error: "Too much cream" }),
  // * ALTERNATIVE with an allowed minimum value of 0, instead of a positive one:
  //  cream: z
  // .number()
  // .min(0, { error: "Too little cream" })
  // .max(5, { error: "Too much cream" }),
});

export { IceCreamOrderSchema };

// Beispiel-Verwendung:
// const order = {
//   scoops: ['chocolate', 'nougat'],
//   sprinkles: 'chocolate',
//   spoon: true,
//   cream: -3,
// };

// ! safeParse() is safer than parse(): It returns { success, data, error } instead of throwing an exception.
// const { data, error, success } = IceCreamOrderSchema.safeParse(order);

// console.log({ data, error, success });

// if (!success) {
// * z.prettifyError() formats Zod errors into readable strings - very useful for debugging!
//   console.log(z.prettifyError(error));
// }
