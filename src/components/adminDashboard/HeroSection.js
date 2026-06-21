import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Droplet,
  CreditCard,
  CalendarPlus,
  Truck,
  AlertCircle,
  IndianRupee,
} from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-6 md:p-8 lg:p-10 shadow-sm border border-blue-500/30">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/admin-bg.png"
          alt="RO Plant Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-8">
        {/* Left Side: Greeting & Glassmorphism Badges */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Good Morning, <span className="text-blue-200">Hemant</span> 👋
          </h1>
          <p className="text-blue-100/90 text-sm md:text-base leading-relaxed max-w-lg mb-6">
            Manage your deliveries, payments, and customers from one central
            command center.
          </p>

          {/* New Premium Glassmorphism Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <Truck className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-medium text-white">
                128/150 Deliveries
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <AlertCircle className="h-4 w-4 text-rose-300" />
              <span className="text-xs font-medium text-white">
                14 Pending Dues
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <IndianRupee className="h-4 w-4 text-emerald-300" />
              <span className="text-xs font-medium text-white">
                ₹4,250 Collected Today
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full xl:w-auto mt-4 xl:mt-0">
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30 backdrop-blur-md shadow-sm transition-all duration-300 flex-1 justify-start sm:justify-center px-4"
          >
            <PlusCircle className="mr-2 h-4 w-4 text-blue-200" /> Add Customer
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30 backdrop-blur-md shadow-sm transition-all duration-300 flex-1 justify-start sm:justify-center px-4"
          >
            <Droplet className="mr-2 h-4 w-4 text-cyan-300" /> Add Delivery
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30 backdrop-blur-md shadow-sm transition-all duration-300 flex-1 justify-start sm:justify-center px-4"
          >
            <CreditCard className="mr-2 h-4 w-4 text-emerald-300" /> Add Payment
          </Button>
          <Button
            variant="default"
            className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 font-bold border-none flex-1 justify-start sm:justify-center px-4"
          >
            <CalendarPlus className="mr-2 h-4 w-4" /> Event Order
          </Button>
        </div>
      </div>
    </div>
  );
}
