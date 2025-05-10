import { loginSchema } from "@/schemas";
import { z } from "zod";

export type LoginFormType = z.infer<typeof loginSchema>;
