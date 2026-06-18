import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string().email("Please enter a valid email"),

    mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),

    pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),

    address: z.string().min(10, "Please enter complete address"),

    landmark: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
