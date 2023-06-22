import { z } from "zod";

export const PostValidator = z.object({
	title: z
		.string()
		.min(10, { message: "Title mustbe at least 10 characters." })
		.max(150, { message: "Title should not be longer than 150 characters." }),
	subredditId: z.string(),
	content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
