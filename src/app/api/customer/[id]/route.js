import { requireOwner } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Customer from "@/models/customer.model";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDB();
    await requireOwner();
    if (!id) {
      return Response.json({
        success: false,
        message: "Customer ID is required",
      });
    }
    const customer = await Customer.findById(id);
    if (!customer) {
      return Response.json({
        success: false,
        message: "Customer not found",
      });
    }
    return Response.json({
      success: true,
      customer,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await connectDB();
    await requireOwner();
    if (!id) {
      return Response.json({
        success: false,
        message: "Customer ID is required",
      });
    }
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      return Response.json({
        success: false,
        message: "Customer not found",
      });
    }
    return Response.json({
      success: true,
      customer,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const { name, mobile, email, address, landmark, ratePerCan } = body;
  try {
    await connectDB();
    await requireOwner();
    if (!id) {
      return Response.json({
        success: false,
        message: "Customer ID is required",
      });
    }
    const customer = await Customer.findByIdAndUpdate(
      id,
      { name, mobile, email, address, landmark, ratePerCan },
      { new: true },
    );

    if (!customer) {
      return Response.json({
        success: false,
        message: "Customer not found",
      });
    }
    return Response.json({
      success: true,
      message: "Customer updated successfully",
      customer,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
