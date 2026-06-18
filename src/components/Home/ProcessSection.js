import React from "react";
import {
  Droplets,
  Filter,
  ShieldCheck,
  FlaskConical,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Droplets,
      title: "Water Collection",
      desc: "Carefully sourced raw water enters our purification facility.",
    },
    {
      icon: Filter,
      title: "Multi-Stage Filtration",
      desc: "Sediments, dust particles and impurities are removed.",
    },
    {
      icon: ShieldCheck,
      title: "RO Purification",
      desc: "Advanced reverse osmosis membranes remove dissolved contaminants.",
    },
    {
      icon: FlaskConical,
      title: "UV Sterilization",
      desc: "Ultraviolet treatment destroys bacteria and harmful microorganisms.",
    },
    {
      icon: ScanSearch,
      title: "Quality Testing",
      desc: "Every batch undergoes strict TDS and purity verification.",
    },
    {
      icon: CheckCircle2,
      title: "Safe Delivery",
      desc: "Fresh RO water is packed and delivered to customers.",
    },
  ];

  return (
    <section id="process" className="py-28 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 font-semibold mb-3">
            Water Purification Process
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            6 Steps To Absolute Purity
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Every drop of water passes through multiple stages of purification,
            testing and quality control before reaching your doorstep.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-blue-600" />
                </div>

                <div className="text-sm font-bold text-blue-600 mb-3">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-7">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Image */}
        <div className="mt-16 overflow-hidden rounded-[32px] shadow-xl">
          <img
            src="/process.png"
            alt="Water Purification Process"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
