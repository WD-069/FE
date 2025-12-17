import z from "zod";

const CatFactsSchema = z.object({
  fact: z.string(),
  length: z.number(),
  //   thumbnail: z.url().catch(() => "https://placeholder/image/300x300"),
});

export { CatFactsSchema };
