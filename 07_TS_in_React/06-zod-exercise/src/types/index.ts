import type z from "zod";
import type { CatFactsSchema } from "../schema/catFacts";
import type { ProductSchema } from "../schema/products";

type CatFact = z.infer<typeof CatFactsSchema>;

type Product = z.infer<typeof ProductSchema>;

export type { CatFact, Product };
