import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-blue-600 font-semibold mb-3">Customer Stories</p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Trusted By Hundreds Of Families
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            For years, Mahankal RO + UV Chilled Water has been delivering safe
            and hygienic drinking water to homes, offices and events.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Testimonial */}
          <Card className="border-0 shadow-xl rounded-[32px] overflow-hidden">
            <CardContent className="p-10 lg:p-14">
              <Quote className="text-blue-600 mb-8" size={52} />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-2xl font-medium text-slate-800 leading-relaxed">
                Since switching to Mahankal Water Services, we never worry about
                drinking water quality. Delivery is always on time and customer
                support is excellent.
              </p>

              <div className="flex items-center gap-4 mt-10">
                <Avatar className="w-14 h-14">
                  <AvatarFallback className="bg-blue-600 text-white">
                    RK
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-bold text-lg">Rajesh Kumar</h4>

                  <p className="text-slate-500">Residential Customer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image */}
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="/screen3.png"
              alt="Happy Customer"
              className="w-full h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
