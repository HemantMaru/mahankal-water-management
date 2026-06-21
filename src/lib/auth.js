// src/lib/auth.js

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/user.model.js";
import { connectDB } from "./db.js";

export async function getCurrentUser() {
  await connectDB();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    throw new Error("Invalid token");
  }

  const user = await User.findById(decoded.id || decoded.userId).select(
    "-password",
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function requireOwner() {
  const user = await getCurrentUser();

  if (user.role !== "owner") {
    throw new Error("Forbidden");
  }

  return user;
}
