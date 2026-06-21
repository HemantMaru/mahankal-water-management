import { z } from "zod";

export const customerSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters")
        .regex(
            /^[A-Za-z][A-Za-z ]*[A-Za-z]$/,
            "Name can only contain letters and spaces, and must not start or end with a space",
        )
        .refine((value) => !value.includes("  "), {
            message: "Name cannot have consecutive spaces",
        }),
    mobile: z
        .string()
        .length(10, "Mobile number must be 10 digits")
        .regex(/^[6-9]\d{9}$/, "Invalid mobile number format"),

    email: z.string().email("Please enter a valid email"),


    address: z
        .string()
        .min(1, "Address cannot be empty")
        .min(5, "Address must be at least 5 characters")
        .max(200, "Address must not exceed 200 characters")
        .regex(
            /^(?=.*[a-zA-Z0-9])/,
            "Address must contain at least one letter or number",
        ),
});