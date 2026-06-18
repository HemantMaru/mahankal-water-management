import React from "react";
import { Home, Building2, CalendarDays, Truck, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Home Delivery",
      description:
        "Fresh RO + UV chilled drinking water delivered directly to your doorstep.",
      image: "/service1.png",
      icon: Home,
    },
    {
      title: "Office Supply",
      description:
        "Reliable water supply solutions for offices, co-working spaces and businesses.",
      image: "/service2.png",
      icon: Building2,
    },
    {
      title: "Wedding & Events",
      description:
        "Bulk water delivery services for weddings, parties and special occasions.",
      image: "/service3.png",
      icon: CalendarDays,
    },
    {
      title: "Bulk Orders",
      description:
        "Large-scale water supply for institutions, factories and commercial sites.",
      image: "/service4.png",
      icon: Truck,
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-blue-600 font-semibold mb-3">Our Services</p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Tailored Water Solutions For Every Need
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            From households to corporate offices and large events, we provide
            safe, hygienic and reliable drinking water.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-7 mb-6">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-blue-600 font-semibold">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
