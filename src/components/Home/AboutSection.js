import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "ISO 9001 Certified",
    "TDS Monitoring",
    "Daily Quality Audit",
    "BPA Free Vessels",
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div>
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/screen2.png"
                alt="RO Plant Facility"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 mb-6">
              World-Class Reverse Osmosis Infrastructure
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-10 max-w-xl">
              Our state-of-the-art purification facility utilizes
              industrial-grade membrane filtration and UV sterilization to
              remove 99.9% of dissolved solids, heavy metals and microorganisms
              while maintaining essential minerals.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />

                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 text-blue-600 font-semibold text-lg">
              Tour our facility
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
