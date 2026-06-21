import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    landmark: {
      type: String,
      default: "",
    },
    ratePerCan: {
      type: Number,
      default: 20,
      required: [true, "Rate per can is required"],
      min: [0, "Rate cannot be negative"],
    },
    pendingAmount: {
      type: Number,
      default: 0,
      min: [0, "Pending amount cannot be negative"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;
