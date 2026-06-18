import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import React from "react";
import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import ProcessSection from "@/components/Home/ProcessSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Footer from "@/components/Home/Footer";
import DeliveryFleetSection from "@/components/Home/DeliveryFleetSection";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen font-sans selection:bg-primary selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section*/}
        <AboutSection />

        {/*DeliveryFleetSection */}
        <DeliveryFleetSection />
        {/* Services Section */}
        <ServicesSection />

        {/* Purification Process Section */}
        <ProcessSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
