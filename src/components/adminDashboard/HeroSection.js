import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, ShoppingCart, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-64 rounded-[32px] overflow-hidden mb-8 group shadow-2xl shadow-primary/10">
      <img
        src="{{DATA:IMAGE:IMAGE_54}}"
        alt="Mahankal RO Plant"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center px-12 z-10">
        <div className="max-w-xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[10px] font-black tracking-[0.2em] uppercase">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Logistics Command Center
          </div>

          <div>
            <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
              Welcome Back, <span className="text-cyan-400 italic">Hemant</span>
            </h1>
            <p className="text-slate-200 font-medium text-lg mt-2 leading-relaxed opacity-90">
              Your RO systems are operating at{" "}
              <span className="text-white font-black">98.4% efficiency</span>{" "}
              today. Manage your fleet and customer lifecycle from one unified
              hub.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 h-12 font-black shadow-xl shadow-primary/30 group"
            >
              <UserPlus className="mr-2" size={18} />
              Add Customer
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-2xl px-8 h-12 font-black transition-all"
            >
              <ShoppingCart className="mr-2" size={18} />
              Create Order
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-12 flex gap-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-[24px]">
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-300">
            Live Status
          </div>
          <div className="text-xl font-black text-white mt-1">
            All Systems Normal
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-[24px]">
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-300">
            Chilled Temp
          </div>
          <div className="text-xl font-black text-white mt-1">4.2°C</div>
        </div>
      </div>
    </div>
  );
}
