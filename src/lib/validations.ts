import { z } from "zod";

export const testimonialsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Ім'я повинно містити щонайменше 3 символи" }),
  comment: z
    .string()
    .min(12, { message: "Коментар повинен бути щонайменше 12 символів" }),
  raiting: z.string(),
});
