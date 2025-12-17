import z from "zod";

const ProductSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  price: z.number().min(0),
  thumbnail: z.url(),
});

const ProductSchemaArray = z.array(ProductSchema);

export { ProductSchema, ProductSchemaArray };
