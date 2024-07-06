import { z } from "zod";

const productSchema = z.object({
	title: z.string().min(6, "Title must be at least 6 characters"),
	price: z.number().nonnegative("Price must be a positive number"),
	description: z.string().optional(),
	thumbnail: z.any().optional(),
});

export default productSchema;