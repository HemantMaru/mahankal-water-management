
import { requireOwner } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Customer from "@/models/customer.model";

export async function POST(req) {
  try {
    await connectDB();
    await requireOwner();
    const body = await req.json();
    const { name, mobile, email, address, landmark, ratePerCan } = body;
    if (!name || !mobile || !address) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields (Name, Mobile, Address)",
        },
        { status: 400 },
      );
    }

  
    const customer = await Customer.create({
      name,
      email,
      mobile,
      address,
      landmark,
      ratePerCan,
    });

  
    return Response.json(
      { success: true, message: "Customer created successfully", customer },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/customer ERROR:", error); 
    return Response.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    await connectDB();
    await requireOwner();

    const customers = await Customer.find().sort({ createdAt: -1 });

    return Response.json({ success: true, customers }, { status: 200 });
  } catch (error) {
    console.error("GET /api/customer ERROR:", error);

 
    return Response.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}


