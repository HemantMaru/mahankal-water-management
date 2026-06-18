import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Truck, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/screen1.png"
          alt="RO Plant"
          className="w-full h-full object-cover object-center"
        />

        {/* Better Mobile Overlay */}
        <div className="absolute inset-0 bg-white/75 lg:bg-gradient-to-r lg:from-white/85 lg:via-white/35 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100 border-none px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold tracking-wide text-xs sm:text-sm">
            PREMIUM RO WATER DELIVERY
          </Badge>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Pure RO Water
            <br />
            <span className="text-blue-600">
              Delivered To
              <br className="sm:hidden" /> Your Doorstep
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl text-slate-800 font-medium">
            Experience the pinnacle of hydration with Mahankal RO + UV Chilled
            Water. Our advanced 7-stage reverse osmosis process ensures
            pharmaceutical-grade purity for your home and office.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Button
              size="lg"
              className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg"
            >
              Book Water Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 right-8 hidden xl:flex gap-4 z-20">
        <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl px-6 py-4 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">99.9%</h3>
            <p className="text-sm text-slate-500">Purity Level</p>
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl px-6 py-4 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
            <Truck className="h-6 w-6 text-cyan-600" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">1hr</h3>
            <p className="text-sm text-slate-500">Express Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
