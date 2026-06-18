import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/user.model.js";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json(
      { success: false, message: "Unauthorized access" },
      { status: 401 },
    );
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return Response.json(
      { success: false, message: "Invalid token" },
      { status: 401 },
    );
  }

  const user = await User.findById(decoded.userId || decoded.id).select(
    "-password",
  );
  return Response.json({
    success: true,
    user,
  });
}
