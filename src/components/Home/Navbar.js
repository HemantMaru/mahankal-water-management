"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <Droplets size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Mahankal RO
                </h2>

                <p className="text-xs text-slate-500">UV Chilled Water</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex justify-center">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-4 justify-self-end">
              <Button
                onClick={function () {
                  router.push("/auth/login");
                }}
                variant="outline"
                className="rounded-xl cursor-pointer"
              >
                Customer Login
              </Button>

              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
                Book Water
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden justify-self-end">
              <button onClick={() => setMobileMenu(true)} className="p-2">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-300 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <h2 className="text-xl font-bold">Mahankal RO</h2>

          <button onClick={() => setMobileMenu(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="text-3xl font-bold text-slate-900"
            >
              {link.name}
            </a>
          ))}

          <Button
            size="lg"
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-10"
          >
            Book Water
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
