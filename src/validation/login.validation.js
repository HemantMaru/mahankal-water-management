import { z } from "zod";

export const loginSchema = z.object({
  emailOrMobile: z
    .string()
    .min(1, "Email or Mobile is required")
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mobileRegex = /^[6-9]\d{9}$/;

        return emailRegex.test(value) || mobileRegex.test(value);
      },
      {
        message: "Enter valid email or mobile number",
      },
    ),

  password: z.string().min(6, "Password must be at least 6 characters"),
});
