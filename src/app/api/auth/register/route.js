import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db.js";
import User from "@/models/user.model.js";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, mobile, password, address, pincode, landmark } = body;

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return Response.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      address,
      pincode,
      landmark,
      role: "customer",
    });

    return Response.json(
      {
        success: true,
        message: "Account created",
        user: {
          id: user._id,
          name,
          email,
          mobile,
          address,
          pincode,
          landmark,
          role: user.role,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return Response.json(
      {
        success: false,

        message: error.message,
      },
      { status: 500 },
    );
  }
}
