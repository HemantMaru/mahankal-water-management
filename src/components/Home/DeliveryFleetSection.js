import { Truck, MapPin, ShieldCheck, Navigation } from "lucide-react";

export default function DeliveryFleetSection() {
  return (
    <section className="py-28 bg-[#f7f7fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Precision Logistics for Fresh Delivery
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              Our climate-controlled delivery fleet ensures that every drop
              reaches customers safely while maintaining purity throughout
              transit.
            </p>
          </div>

          <div className="flex items-center gap-16 lg:gap-24">
            <div>
              <h3 className="text-5xl font-bold text-blue-600">1250</h3>
              <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">48</h3>
              <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mt-2">
                Fleet Strength
              </p>
            </div>
          </div>
        </div>

        {/* Large Fleet Image */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src="/screen4.png"
            alt="Fleet"
            className="w-full h-[700px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
